students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def names_output(data):
    for i in range(len(data)):
        line = ''
        for vals in data[i].values():
            line += vals + ' '
        line = line[0:len(line)-1]
        print(line)

names_output(students)

def names_output_improved(data):
    count = 1
    for key in data:
        print(key)
        for vals in data[key]:
            first = vals['first_name']
            last = vals['last_name']
            nameLength = len(vals['first_name']) + len(vals['last_name'])
            print('{} - {} {} - {}'.format(str(count), first, last, str(nameLength)))
            count += 1


names_output_improved(users)
