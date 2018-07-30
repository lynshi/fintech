import json
from watson_developer_cloud import ToneAnalyzerV3
from watson_developer_cloud.tone_analyzer_v3 import ToneInput

from Stock.wrappers.apiCredentials import api_credentials


class IBMToneAnalyzerWrapper:
    high_likelihood_score_threshold = 0.75  # req > than

    def __init__(self):
        self.credentials = api_credentials['ibm-tone-analyzer']
        self.tone_analyzer = ToneAnalyzerV3(
            version='2018-07-30',
            iam_api_key=self.credentials['apikey'],
            url=self.credentials['url']
        )

    def analyze_sentiment(self, text):
        tone_input = ToneInput(text)
        tone = self.tone_analyzer.tone(tone_input, 'application/json')

        print(json.dumps(tone, indent=2))
