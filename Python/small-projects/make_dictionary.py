name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas", 'corgi']

def make_dict(arr1, arr2):
    new_dict = {}
    if len(arr1) < len(arr2):
        big = arr2
        small = arr1
    else:
        big = arr1
        small = arr2
    for i in range(len(big)):
        if len(small) -1 < i:
            new_dict[big[i]] = None
        else:
            new_dict[big[i]] = small[i]
    return new_dict

print(make_dict(name, favorite_animal))