def multi_table(num):
    y = 0
    for y in range(0, num -1):
        if y == 0:
            newline = 'x   '
        elif y >= 10 and y < 100:
            newline = str(y) + '  '
        else:
            newline = str(y) + '   '
        for x in range(1, num+ 1):
            if y == 0:
                newline += str(x) + '   '
            elif y*x <= 9:
                newline += str(x*y) + '   '
            elif y*x >= 10 and y*x < 100:
                newline += str(x*y) + '  '
            else:
                newline += str(x*y) + ' '
        print(newline)
        
        

multi_table(15)
        