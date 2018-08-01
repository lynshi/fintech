from flask_restful import Resource

from Stock.wrappers.ibm_tone_analyzer import IBMToneAnalyzerWrapper
from Stock.wrappers.news_api import NewsAPIWrapper


class StockSentiment(Resource):
    def __init__(self):
        super().__init__()
        self.ibm_sentiment_analyzer = IBMToneAnalyzerWrapper()
        self.news_api = NewsAPIWrapper()

    def get_stock_sentiment(self, company_name):
        news_data = self.news_api.get_news_for_stock(company_name)
        sentiment_holder = {}
        sentiment_result = {}
        for article in news_data['articles']:
            sentiment = self.ibm_sentiment_analyzer.analyze_sentiment(
                article['description'])
            if 'document_tone' not in sentiment:
                continue

            sentiment = sentiment['document_tone']

            if len(sentiment['tones']) == 0:
                continue

            for tone in sentiment['tones']:
                if tone['tone_id'] not in sentiment_holder:
                    sentiment_holder[tone['tone_name']] = {'count': 0,
                                                           'sentiment': 0}
                sentiment_holder[tone['tone_name']]['count'] += 1
                sentiment_holder[tone['tone_name']]['sentiment'] \
                    += tone['score']

        for tone in sentiment_holder:
            sentiment_result[tone] = sentiment_holder[tone]['sentiment'] \
                                     / sentiment_holder[tone]['count']

        return sentiment_result
