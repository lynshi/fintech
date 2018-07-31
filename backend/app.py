from flask import Flask
from flask_restful import Api, Resource

from Stock.stock_sentiment import StockSentiment


app = Flask(__name__)
api = Api(app)
api.add_resource(StockSentiment, '/stock-sentiment/<string:company_name>')
app.run(debug=True)
