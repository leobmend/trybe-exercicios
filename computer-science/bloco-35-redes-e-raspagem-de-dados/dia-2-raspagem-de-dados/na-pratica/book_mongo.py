from pymongo import MongoClient
from os import environ

password = environ['MONGOPASS'].replace('@', '%40')
url_end = '@localhost:27017/?authSource=admin&readPreference=primary&ssl=false'

connection_string = 'mongodb://root:' + password + url_end

category = input("Escolha uma categoria: ")
with MongoClient(connection_string) as client:
    db = client.catalogue
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
