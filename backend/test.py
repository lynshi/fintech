import json

from Stock.wrappers.ibm_tone_analyzer import IBMToneAnalyzerWrapper
from Stock.wrappers.news_api import NewsAPIWrapper

ibm = IBMToneAnalyzerWrapper()
sentiment = ibm.analyze_sentiment('Hi, today was a great day! I really enjoyed eating ice cream.')
print(json.dumps(sentiment, indent=4))
input()

news = NewsAPIWrapper()
data = news.get_news_for_stock('microsoft')
print(json.dumps(data, indent=4))
print(type(data))
