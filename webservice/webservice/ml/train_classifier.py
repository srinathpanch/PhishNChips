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

class PhisingTrainer(object):
    def __init__(self):
        self.maxlen = 50
        self.embedding_dim = 50
        self.glove = 'data/glove.6B/glove.6B.50d.txt'
        self.corpus = []
        self.labels = []
        doc_file = 'data/spam.csv'
        self.load_corpus(doc_file)
        
    def load_corpus(self, doc_file):
        data = pd.read_csv(doc_file, encoding='latin-1')
        data = data.drop(["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis=1)
        data = data.rename(columns={"v1":"label", "v2":"text"})
        data['label_num'] = data.label.map({'ham':0, 'spam':1})
        self.corpus = data['text'].tolist()
        self.labels = data['label_num'].tolist()
        #X_train,X_test,y_train,y_test = train_test_split(data["text"],data["label"], test_size = 0.2, random_state = 10)
#       print(self.corpus[0])
#        print(self.labels[0])

        
    def preprocess_text(self):
        self.tokenizer = Tokenizer(num_words=5000)
        self.tokenizer.fit_on_texts(self.corpus)
        with open('data/tokenizer', 'wb') as f:
            pickle.dump(self.tokenizer, f)
        self.vocab_size = len(self.tokenizer.word_index)+1
        self.X_train = self.tokenizer.texts_to_sequences(self.corpus)
        self.X_train = pad_sequences(self.X_train, padding='post', maxlen=self.maxlen) 
        self.embedding_matrix = self.create_embedding_matrix(self.glove, self.tokenizer.word_index, self.embedding_dim)

        self.X_train,self.X_test,self.Y_train,self.Y_test = train_test_split(self.X_train,self.labels, test_size = 0.2, random_state = 10)
        self.Y_train, self.Y_test = np.array(self.Y_train), np.array(self.Y_test)
        print(self.X_train.shape)
        print(self.Y_train.shape)
        print(self.X_test.shape)
        print(self.Y_test.shape)
        #print(self.X_train[0])
        #print(len(self.X_train))
        #exit()
    def clean_text(self):
        pass

    def create_model(self):

        #labels = np.zeros(len(self.X_train))
        model = Sequential()
        model.add(Embedding(input_dim=self.vocab_size,output_dim=self.embedding_dim,input_length=self.maxlen,
                            weights=[self.embedding_matrix], trainable=False))
        model.add(Dropout(0.2))
        model.add(Conv1D(64, 5, activation='relu'))
        model.add(MaxPooling1D(pool_size=4))
        #model.add(LSTM(100))
        model.add(Flatten())
        model.add(Dense(1, activation='sigmoid'))
        model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
        #model.summary()
        history = model.fit(self.X_train, self.Y_train, validation_data=(self.X_test, self.Y_test), epochs=1)
        model.save('data/model.h5')

        return history

    def train_model(self):
        history = self.create_model()

    def test_model(self):
        with open('data/tokenizer', 'rb') as f:
            tokenizer = pickle.load(f)
        msg = 'Hi how are you?'
        corp = np.array([msg])
        unknown = [msg]
        unknown = tokenizer.texts_to_sequences(unknown)
        unknown = pad_sequences(unknown, padding='post', maxlen=self.maxlen) 
        #unknown = np.expand_dims(unknown, axis=0)
        model = load_model('data/model.h5')
        pred = model.predict(unknown)
        print(pred)

    def plot_history(self,history):
        """
        Plot the accuracy and validation loss and acc.
        """
        acc = history.history['acc']
        val_acc = history.history['val_acc']
        loss = history.history['loss']
        val_loss = history.history['val_loss']
        x = range(1, len(acc) + 1)

        plt.figure(figsize=(12, 5))
        plt.subplot(1, 2, 1)
        plt.plot(x, acc, 'b', label='Training acc')
        plt.plot(x, val_acc, 'r', label='Validation acc')
        plt.title('Training and validation accuracy')
        plt.legend()
        plt.subplot(1, 2, 2)
        plt.plot(x, loss, 'b', label='Training loss')
        plt.plot(x, val_loss, 'r', label='Validation loss')
        plt.title('Training and validation loss')
        plt.legend()

    def create_embedding_matrix(self, filepath, word_index, embedding_dim):
        vocab_size = len(word_index) + 1  # Adding again 1 because of reserved 0 index
        embedding_matrix = np.zeros((vocab_size, embedding_dim))
        good = 0
        bad = 0
        with open(filepath) as f:
            for line in f:
                word, *vector = line.split()
                if word in word_index:
                    idx = word_index[word] 
                    try:
                        embedding_matrix[idx] = np.array(
                        vector, dtype=np.float32)[:embedding_dim]
                        good +=1
                    except:
                        bad += 1

                        
        return embedding_matrix



pt = PhisingTrainer()
pt.preprocess_text()
#pt.train_model()
pt.test_model()
