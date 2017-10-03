import requests

r = requests.get('https://api.github.com/events')
print(r.raw)
r = requests.post('http://httpbin.org/post', data = {'key':'value'})
print(r)
r = requests.put('http://httpbin.org/put', data = {'key':'value'})
print(r)
r = requests.delete('http://httpbin.org/delete')
print(r)
r = requests.head('http://httpbin.org/get')
print(r)
r = requests.options('http://httpbin.org/get')
print(r)

payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get('http://httpbin.org/get', params=payload)