import datetime
import requests
from Stock.wrappers.apiCredentials import api_credentials


class NewsAPIWrapper:
    SOURCES = ['bloomberg', 'business-insider', 'financial-post',
               'financial-times', 'reuters', 'the-wall-street-journal', 'cnbc']

    def __init__(self):
        self.credentials = api_credentials['news-api']
        self.url = self.credentials['url']

    def get_news_for_stock(self, company, from_date=datetime.datetime.today()):
        company = company.replace(' ', '%20')
        request_url = self.url + 'everything?' + \
                      'q=' + company + '&' + \
                      'from=' + \
                      from_date.strftime('%Y-%m-%d') + '&' + \
                      'sortBy=popularity&' + \
                      'sources='

        for s in NewsAPIWrapper.SOURCES:
            request_url += s + ','

        request_url += '&apiKey=' + self.credentials['apikey']

        print(requests.get(request_url).json())

        return requests.get(request_url).json()
