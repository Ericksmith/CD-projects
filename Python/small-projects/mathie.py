
#print the odd numbers from 1-1000
for i in range(1, 1000, 2):
    print(i)

#prints the multiples of 5 from 5-1 million
for i in range(5, 1000000, 5):
    print(i)

#print items in a list
def printList(list):
    for items in list:
        print(items)

a = [1, 2, 5, 10, 255, 3]
printList(a)

#print the average of the items in the list
def printAvg(list):
    avg = 0
    for item in list:
        avg += item
    avg = avg/len(list)
    print(avg)

printAvg(a)
