class trackProducts(object):

    def __init__(self, price, name, weight, brand, cost):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand  = brand
        self.cost = cost
        self.status = "for sale"
    
    def sell(self):
        self.status = "sold"
        return self

    def addTax(self, rate):
        self.price = self.price + self.price * rate
        return self

    def itemReturned(self, reason):
        if reason == "defective":
            self.status = reason
            self.price = 0
        elif reason == "unopened":
            self.status = "for sale"
        elif reason == "opened":
            self.status = "used"
            self.price = int(self.price - self.price * 0.20)
        return self
    
    def display_info(self):
        print("Name:" + self.name)
        print("Brand: " + self.brand)
        print("Price: $" + str(self.price))
        print("Cost: $" + str(self.cost))
        print("Weight: {} lb".format(str(self.weight)))
        print("Status:" + str(self.status))
        return self

tonka_truck = trackProducts(20, "Tonka Truck", 5, "playCo", 17)
tonka_truck.display_info()

tonka_truck.addTax(0.10)
tonka_truck.display_info()

tonka_truck.itemReturned("opened")
tonka_truck.display_info()

tonka_truck.sell()
tonka_truck.display_info()

