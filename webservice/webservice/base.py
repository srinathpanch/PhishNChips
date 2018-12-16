from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

#
# Settings for the SQLite database e.g. define the location of the file
#
dir = os.path.dirname(__file__)
engine = create_engine('sqlite:///' + dir + '/database.db')
Session = sessionmaker(bind=engine)

Base = declarative_base()