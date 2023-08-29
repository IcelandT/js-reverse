import requests
import blackboxprotobuf


url = 'https://api.steampowered.com/IAuthenticationService/GetPasswordRSAPublicKey/v1'
params = {
    'origin': 'https://store.steampowered.com',
    'input_protobuf_encoded': 'CglJY2VsYW5kazE='
}
protobuf_text = requests.get(url=url, params=params).text
print(protobuf_text)
a, b = blackboxprotobuf.decode_message(protobuf_text.encode())
print(a, b)