myDict = {'name': 'Bob', 'age': '3', 'country':'Kashmir', 'language':'binary'}

def aboutPerson(d):
    print("My name is {}".format(d['name']))
    print("My age is {}".format(d['age']))
    print("My country of birth is {}".format(d['country']))
    print("My favorite language is {}".format(d['language']))

aboutPerson(myDict)