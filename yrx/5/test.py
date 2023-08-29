import requests
import execjs


for page in range(1, 6):
    with open('js.js', mode='r', encoding='utf-8') as f:
        js_file = f.read()

    js_code = execjs.compile(js_file)
    json_data = js_code.call('get_cookie')

    api = 'https://match.yuanrenxue.cn/api/match/5'
    params = {
        'page': page,
        'm': json_data['m'],
        'f': json_data['f']
    }
    headers = {
        'user-agent': 'yuanrenxue.project'
    }
    cookies = {
        'Cookie': f'RM4hZBv0dDon443M={json_data["RM4"]}',
        'sessionid': 'hns27j6tvw4sa4ez2gqipcyauzkr4cgpj'
    }
    response = requests.get(url=api, headers=headers, params=params, cookies=cookies).text
    print(response)