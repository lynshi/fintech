from Stock.wrappers.alphaventure import AlphaVantageAPIWrapper


response = AlphaVantageAPIWrapper.get_intra_data_stock_price_data(symbol='MSFT',
                                                                  interval=
                                                                  '5min')
print(response.json())
