from pymongo import MongoClient
from os import environ

# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")

client = MongoClient(
  'mongodb://root:' + environ['MONGOPASS'].replace('@', '%40')
  + '@localhost:27017/?authSource=admin&readPreference=primary&ssl=false'
)

# o banco de dados catalogue será criado se não existir
db = client.catalogue

# documents representa dados (livros) obtidos na raspagem
documents = [
    {
        "title": "A Light in the Attic",
        "categories": "Cat"
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]

# a coleção books será criada se não existir
students = db.books
students.insert_many(documents)
print(students)
client.close()  # fecha a conexão com o banco de dados
