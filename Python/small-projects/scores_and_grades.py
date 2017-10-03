import random

def scores_and_grades():
    for i in range(10):
        random_num = random.randint(60, 100)
        print(random_num, i)
        if(random_num < 70 and random_num > 59):
            print("Score: {}; Your grade is a D".format(random_num))
        elif(random_num < 80 and random_num > 69):
            print("Score: {}; Your grade is a C".format(random_num))
        elif(random_num < 90 and random_num > 79):
            print("Score: {}; Your grade is a B".format(random_num))
        else:
            print("Score: {}; Your grade is a A".format(random_num))

scores_and_grades()