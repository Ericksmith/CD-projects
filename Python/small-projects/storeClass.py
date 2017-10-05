class store(object):

    def __init__(self, location, owner):
        self.products = []
        self.location = location
        self.owner = owner

    def add_product(self, product):
        for item in product:
            self.products.append(item)
        return self

    def remove_product(self, remove):
        self.products.remove(remove)
        return self

    def inventory(self):
        print(self.products)


portos = store("Burbank", "Joe Blow")
portos.add_product(["Cake", "Cubano", "Icetea"])
portos.remove_product('Cake')
portos.inventory()
print(portos.location)
