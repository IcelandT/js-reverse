import requests

import execjs


while True:
    text = '大家好'
    with open('sign.js', mode='r', encoding='utf-8') as f:
        js_file = f.read()

    js_code = execjs.compile(js_file)

    data = {
        'from': 'zh',
        'to': 'en',
        'query': text,
        'simple_means_flag': '3',
        'sign': js_code.call('encrypt', text),
        'token': '60ded4b4ff97941a7bc53f9272ab2023',
        'domain': 'common',
        'ts': '1692945367076'
    }
    headers = {
        'Cookie': 'BIDUPSID=065AAB9FD6B0642C7F53F848337AB959; PSTM=1688349162; BAIDUID=065AAB9FD6B0642C6CC74209A4B3A151:FG=1; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1689821707; BDUSS=HhyVFlxcGNtNll6MDBTMlFnZ1dtbVZkSmEyS2ZIa1NDeTVRZmJxb3oySDIwZVprRVFBQUFBJCQAAAAAAQAAAAEAAABoCq4tSHRsZW9LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZEv2T2RL9kc; BDUSS_BFESS=HhyVFlxcGNtNll6MDBTMlFnZ1dtbVZkSmEyS2ZIa1NDeTVRZmJxb3oySDIwZVprRVFBQUFBJCQAAAAAAQAAAAEAAABoCq4tSHRsZW9LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZEv2T2RL9kc; BAIDUID_BFESS=065AAB9FD6B0642C6CC74209A4B3A151:FG=1; delPer=0; PSINO=2; ZFY=QppFJZks2lBgNDb7Czv0Ehk9OTuseG3wgY6cJ2laWvw:C; H_PS_PSSID=36552_39226_39222_39194_39039_39198_39240_39142_26350_39138_39224_39137_39100; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BA_HECTOR=ala50h2g2la1842525808g0b1iee3681p; ab_sr=1.0.1_YjEyNTc4MWIzNjc3N2UxZTkwZTkxZmZkMDkyZWQ2NWMzMWFmOTEwODBiYzM5YmFhZDAwM2ZmNzYyOGQ4MTk3MjA5YWVjMTgyYWFiNDM2NjljMjdhZDNmYmE0NTQ3MDgzNmM1MWYxMGNkNzI5MTljMDhkZWViMmM0ZDZmYTVjMjdjOWMzODNlYTRhNTAwODMyMmExMzBhY2E4ODhmOTM4MDBjNDYwYmI3NDlhN2JhMzkwZmRmNTAyZDM1OGRmYzMw',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
    }
    print(data)
    url = 'https://fanyi.baidu.com/v2transapi?from=zh&to=en'
    response = requests.post(url=url, headers=headers, data=data).json()
    print(response)