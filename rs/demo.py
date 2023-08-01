import re

import requests
import execjs


url = 'http://www.fangdi.com.cn/new_house/new_house.html'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}
response_1 = requests.get(url=url, headers=headers)
response_1_cookie = response_1.headers.get('Set-Cookie')
N80S = re.findall('FSSBBIl1UgzbN7N80S=(.*?); Path=/', response_1_cookie)[0]
meta_content = re.findall('<meta content="(.*?)"><!--', response_1.text)[0]
script_code = re.findall('<script type="text/javascript" r="m">(.*?)</script>', response_1.text)[0]

with open('rs4.js', mode='r', encoding='utf-8') as f:
    js_file = f.read()

js_code = execjs.compile(js_file)
cookie = js_code.call('encrypt_cookie', meta_content, script_code)
print('ck =>', cookie)