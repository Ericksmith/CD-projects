
def checker_board(num):
    for i in range(num):
        if i%2 == 0:
            print('* * * *')
        if i%2 != 0:
            print(' * * * *')

checker_board(12)