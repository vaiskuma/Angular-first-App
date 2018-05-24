import pymongo
from pymongo import MongoClient

connection = MongoClient ()

#client = MongoClient('localhost', 27017)
#The client object is thread-safe and has connection-pooling built in. If an operation fails because of a network error, ConnectionFailure is raised and the client reconnects in the background. Application code should handle this exception (recognizing that the operation failed) and then continue to execute.

# connect to the students database and the ctec121 collection
#db = connection.students.ctec121


db = connection.napp
collection = db.users
collection.find_one({"name":"name1"})
