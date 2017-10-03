def draw_stars(L):
    for i in L:
        line = ''
        for x in range(i):
            line += '*'
        print(line)

draw_stars([4, 6, 1, 3, 5, 7, 25])


def draw_stars_improved(L):
    for i in L:
        char = '*'
        if type(i) == str:
            num = len(i)
            char = i[0].lower()
        else:
            num = i
        line = ''
        for x in range(num):
            line += char
        print(line)

draw_stars_improved([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])