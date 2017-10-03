import random

def coin_toss():
    heads = 0
    tails = 0
    for i in range(5000):
        if random.randint(0,1) == 1:
            heads += 1
            print("Attempt #{}: Throwing a coin.. It's a head ... Got {} head(s) and far and {} tails(s) so far".format(i, heads, tails))
        else:
            tails += 1
            print("Attempt #{}: Throwing a coin.. It's a tail ... Got {} head(s) and far and {} tails(s) so far".format(i, heads, tails))
    if random.randint(0,1) == 1:
        heads += 1
        print("Attempt #{}: Throwing a coin.. It's a head ... Got {} head(s) and far and {} tails(s) so far".format(5000, heads, tails))
    else:
        tails += 1
        print("Attempt #{}: Throwing a coin.. It's a tail ... Got {} head(s) and far and {} tails(s) so far".format(5000, heads, tails))
    
    
coin_toss()