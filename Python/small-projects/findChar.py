""" Write a program that takes a list of strings and a string containing a single character, and prints a new list of all the strings containing that character."""

def find_char(words_to_search, char):
    result = []
    for items in words_to_search:
        if char in items:
            result.append(items)
    print(result)

find_char(['hello','world','my','name','is','Anna'], 'o')