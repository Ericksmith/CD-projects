def odd_even():
    for i in range(1, 2001):
        if i % 2 == 0:
            print('Number is {}. This is an even number'.format(i))
        else:
            print('Number is {}. This is an odd number'.format(i))

#odd_even()

def multiply(L, y):
    newList = []
    for val in L:
         newList.append(val*y)
    return(newList)

a = [2,4,10,16]
print(multiply(a, 5))

def layered_multiples(L):
    new_array =[]
    i = 0
    for val in L:
        x = ''
        for i in range(val):
            x += '1'
        new_array.insert(i, int(x))
        i+= 1
    return(new_array)

y = layered_multiples(multiply([2,4,5],3))
print(y)
