from keras.models import Sequential
from keras.models import load_model
import sys
sys.setrecursionlimit(10000)
import csv
from keras import layers
from keras.layers import Embedding, Dense, Flatten, Dropout, LSTM, Conv1D, MaxPooling1D
import matplotlib.pyplot as plt
plt.style.use('ggplot')
from keras.preprocessing.text import Tokenizer
import numpy as np
from keras.preprocessing.sequence import pad_sequences
import pandas as pd
from sklearn.model_selection import train_test_split
import pickle
import string
import re
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from string import punctuation
import tensorflow as tf

class Classifier(object):
    def __init__(self):
        with open('webservice/ml/data/tokenizer', 'rb') as f:
            self.tokenizer = pickle.load(f)

        self.model = load_model('webservice/ml/data/model.h5')
        self.maxlen = 500
        self.embedding_dim = 50
        global graph
        self.graph = tf.get_default_graph() 

    def classify(self, msg):
        result = False
        confidence = 0.0
        msg = self.clean_text(msg)
        print(msg)
        corp = np.array([msg])
        corp = [msg]
        corp = self.tokenizer.texts_to_sequences(corp)
        corp = pad_sequences(corp, padding='post', maxlen=self.maxlen) 
        print(corp)
        with self.graph.as_default():
            pred = self.model.predict(corp)[0][0]
        if pred < 0.5:
            result = False
            confidence = 1 - pred
        else:
            result = True
            confidence = pred
        
        return result, confidence
    
    def clean_text(self, text):
        ## Remove puncuation
        text = text.translate(string.punctuation)
        
        ## Convert words to lower case and split them
        text = text.lower().split()
        
        ## Remove stop words
        stops = set(stopwords.words("english"))
        text = [w for w in text if not w in stops and len(w) >= 3]
        #print(text)
        text = " ".join(text)
        ## Clean the text
        text = re.sub(r"[^A-Za-z0-9^,!.\/'+-=]", " ", text)
        text = re.sub(r"what's", "what is ", text)
        text = re.sub(r"\'s", " ", text)
        text = re.sub(r"\'ve", " have ", text)
        text = re.sub(r"n't", " not ", text)
        text = re.sub(r"i'm", "i am ", text)
        text = re.sub(r"\'re", " are ", text)
        text = re.sub(r"\'d", " would ", text)
        text = re.sub(r"\'ll", " will ", text)
        text = re.sub(r",", " ", text)
        text = re.sub(r"\.", " ", text)
        text = re.sub(r"!", " ! ", text)
        text = re.sub(r"\/", " ", text)
        text = re.sub(r"\^", " ^ ", text)
        text = re.sub(r"\+", " + ", text)
        text = re.sub(r"\-", " - ", text)
        text = re.sub(r"\=", " = ", text)
        text = re.sub(r"'", " ", text)
        text = re.sub(r"(\d+)(k)", r"\g<1>000", text)
        text = re.sub(r":", " : ", text)
        text = re.sub(r" e g ", " eg ", text)
        text = re.sub(r" b g ", " bg ", text)
        text = re.sub(r" u s ", " american ", text)
        text = re.sub(r"\0s", "0", text)
        text = re.sub(r" 9 11 ", "911", text)
        text = re.sub(r"e - mail", "email", text)
        text = re.sub(r"j k", "jk", text)
        text = re.sub(r"\s{2,}", " ", text)
        ## Stemming
        text = text.split()
        stemmer = SnowballStemmer('english')
        stemmed_words = [stemmer.stem(word) for word in text]
        text = " ".join(stemmed_words)
        return text

def test():
    c = Classifier()
    msg = 'Hi George,Greetings, I hope my email finds you well. I am Chirag Sood and I will be your dedicated Bookings Manager. I specialise in handling bookings for Oxford and I shall be more than happy to take care of your booking and support you in any way possible. We have received your booking for Premium Studio at Cambridge Terrace.However, in order to process the same, we would require your alternate email address as the email address in use is already registered.Please see that the availability is highly limited and thus I request you to please share the same at the very earliest.Looking forward to hearing from you !ThanksKind regards'
    res, conf = c.classify(msg)
    print(res)
    print(conf)

#test()
