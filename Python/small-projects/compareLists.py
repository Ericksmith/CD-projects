""" Write a program that compares two lists and prints a message depending on if the inputs are identical or not.

Your program should be able to accept and compare two lists: list_one and list_two. 
If both lists are identical print "The lists are the same". If they are not identical print "The lists are not the same." 
Try the following test cases for lists one and two:"""

def compareLists(list1, list2):
    result = True
    if len(list1) != len(list2):
        result = False
    else:
        for i in range(len(list1)):
            if list1[i] != list2[i]:
                result = False
    if result:
        print('The lists are the same')
    else:
        print('The lists are not the same.')


list_one = [1, 2, 5, 6, 2]
list_two = [1, 2, 5, 6, 2]

list_one1 = [1, 2, 5, 6, 5]
list_two1 = [1, 2, 5, 6, 5, 3]

list_one2 = [1, 2, 5, 6, 5, 16]
list_two2 = [1, 2, 5, 6, 5]

list_one3 = ['celery', 'carrots', 'bread', 'milk']
list_two3 = ['celery', 'carrots', 'bread', 'cream']


compareLists(list_one, list_two)
compareLists(list_one1, list_two1)
compareLists(list_one2, list_two2)
compareLists(list_one3, list_two3)
