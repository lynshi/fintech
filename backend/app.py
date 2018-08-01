from flask import Flask, jsonify
from flask_cors import CORS
import urllib.parse

from Stock.stock_sentiment import StockSentiment


app = Flask(__name__)
CORS(app, resources=r'/api/*')

ss = StockSentiment()


@app.route("/api/v1/stock-sentiment/<company_name>")
def get_stock_sentiment(company_name):
    company_name = urllib.parse.quote(company_name, safe='~()*!.\'')
    return jsonify(ss.get_stock_sentiment(company_name))


app.run(debug=True)
