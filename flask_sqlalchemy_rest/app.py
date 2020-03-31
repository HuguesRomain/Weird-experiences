from flask import Flask, request, jsonify 
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os 

# Init app 
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

#Database 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

# Init db 
db = SQLAlchemy(app)

# Init ma 
ma = Marshmallow(app) 

# product Class/model
class Product(db.Model): 
  id = db.Column(db.Integer, primary_key =True)
  name = db.Column(db.String(100), unique=True)
  description = db.Column(db.String(200))
  price = db.Column(db.Float)
  qty = db.Column(db.Integer)

  def __init__(self, name, description, price, qty):
    self.name = name
    self.description = description
    self.price = price
    self.qty = qty

# Porduct Schema 
class ProductSchema(ma.Schema): 
  class Meta: 
    fields = ('id', 'name', 'description', 'price', 'qty')

# Init schema
product_schema = ProductSchema(strict=True)
products_schema = ProductSchema(many=True, strict=True)

# run server 
if __name__ == '__main__': 
  app.run(debug=True)