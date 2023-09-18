import requests

url = 'https://img-xhpfm.xinhuaxmt.com/json/client/commonConfig.json?t=1694415280000'
response = requests.get(url=url)
print(response.headers)