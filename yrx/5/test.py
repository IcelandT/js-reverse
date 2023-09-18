import requests
import execjs


hot_list = list()
with open('js.js', mode='r', encoding='utf-8') as f:
    js_file = f.read()

js_code = execjs.compile(js_file)

for page in range(1, 6):
    json_data = js_code.call('encrypt_data')

    api = 'https://match.yuanrenxue.cn/api/match/5'
    params = {
        'page': page,
        'm': json_data['m'],
        'f': json_data['f']
    }
    headers = {
        'user-agent': 'yuanrenxue.project',
        'Cookie': f'RM4hZBv0dDon443M={json_data["cookie"]}; m=ad9070dc20de65797d67809d14c9f337',
        'sessionid': 'vk9h4014a419g8hnzy6evq5iuf34onpk'
    }
    response = requests.get(url=api, headers=headers, params=params).json()
    for data in response.get('data'):
        value = data.get('value')
        hot_list.append(value)

top_five = sorted(hot_list, reverse=True)[0: 5]
print(top_five)
top_five_sum = sum(top_five)
print(top_five_sum)