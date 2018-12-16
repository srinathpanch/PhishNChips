from sqlalchemy import Table, Column, Integer, ForeignKey

from webservice.base import Base

association_table = Table('association', Base.metadata,
    Column('left_id', Integer, ForeignKey('training_session.id')),
    Column('right_id', Integer, ForeignKey('email.id'))
)