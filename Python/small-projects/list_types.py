'''Loops through list. If list has a mix of types it prints that there are mixed types.
All strings are concat together. All numbers are summed together and printed''' 


def listType(list):
    s = ''
    sum = 0
    num = False
    words = False
    for vals in list:
        if type(vals) == int or type(vals) == float:
            num = True
            sum += vals
        if type(vals) == str:
            words = True
            s += vals
    if num and words:
        print('The list you entered is of mixed type')
    elif num:
        print('The list you entered is of integer type')
    else:
        print('This list you entered is of string type')

    if sum is not 0:
        print("sum: " + str(sum))
    if s is not '':
        print('string: ' + s)

listType([1, 100, 2, 3])
listType([1, 2, 3, 'string', '3', 2.1])
listType(['hodor','hodor','hodor'])
