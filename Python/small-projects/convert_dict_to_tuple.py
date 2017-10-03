my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def convert_dict_to_tuple(data):
    output = []
    for key, val in data.items():
        output.append((key, val))
    return output

print(convert_dict_to_tuple(my_dict))