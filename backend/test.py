from Stock.wrappers.ibm_tone_analyzer import IBMToneAnalyzerWrapper

ibm = IBMToneAnalyzerWrapper()
ibm.analyze_sentiment('Hi, today was a great day! I really enjoyed eating ice cream.')
