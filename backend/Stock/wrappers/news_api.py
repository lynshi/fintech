import datetime
import requests
from Stock.wrappers.apiCredentials import api_credentials


class NewsAPIWrapper:
    def __init__(self):
        self.credentials = api_credentials['news-api']
        self.url = self.credentials['url']

    def get_news_for_stock(self, company):
        company = company.replace(' ', '%20')
        request_url = self.url + 'everything?' + \
                      'q=' + company + '%20stock%20news' + '&' + \
                      'from=' + \
                      datetime.datetime.today().strftime('%Y-%m-%d') + \
                      'sortBy=popularity&' + \
                      'apiKey=' + self.credentials['apikey']
        return requests.get(request_url).json()
