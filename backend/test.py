import json

from Stock.stock_sentiment import StockSentiment

s = StockSentiment()
sentiment = s.get_stock_sentiment('AT&T Inc.')
print(json.dumps(sentiment, indent=4, sort_keys=True))
