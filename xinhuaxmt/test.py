import time
import json

import execjs
import requests
from loguru import logger


api = 'https://h.xinhuaxmt.com/1009/c/youthapi/h5/column/columnnewslist'

data = {
    "cid": "277366",
    "pageNum": 1,
    "pageSize": 15,
    "source": 0
}

time_stamp = str(int(time.time() * 1000))
key = 'Key=4bb7c7298e0778524f45f240d922d85b5bbc525c313a2f011148273f4ccbd186&Timestamp=' + time_stamp + \
      '&Token=&Request=' + json.dumps(data)
logger.info(f'第{data.get("pageNum")}页')
with open('test.js', mode='r', encoding='utf-8') as f:
    js_file = f.read()

js_code = execjs.compile(js_file)
signature = js_code.call('encrypt_signature', key)
logger.info(f'signature => {signature}')

headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Timestamp": time_stamp,
    "Signature": signature,
    "Device-Access-Id": "",
}

response = requests.post(url=api, headers=headers, data=json.dumps(data))
news_list = response.json().get('data').get('newsList')
for news in news_list:
    news_url = news.get('detailurl')
    logger.info(news_url)

logger.info('------------------------------------------------------')