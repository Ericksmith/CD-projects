words = "It's thanksgiving day. It's my birthday, too!"

print(words.find('day'))
test = words.replace('day', 'month')
print(test)

x = [2,54,-2,7,12,98]
print("min:{} max:{}".format(min(x), max(x))) 
print("First:{} Last:{}".format(x[0],x[len(x) - 1]))
foo = [19,2,54,-2,7,12,98,32,10,-3,6]
foo.sort()
print(foo)
foo_start = []
foo_end = []
for index, item in enumerate(foo):
    if index < len(foo)/2:
        foo_start.append(item)
    else:
        foo_end.append(item)

print(foo_start)
print(foo_end)
foo_end.insert(0, foo_start)
print(foo_end)