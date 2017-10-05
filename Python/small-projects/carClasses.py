class car(object):
    
    def __init__(self, price, speed, fuel, mileage):
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.price = price
        if price > 10000:
            self.tax = "15%"
        else:
            self.tax = "12%"

    def display_all(self):
        print("Price: " + str(self.price))
        print("Speed: " + str(self.speed))
        print("Fuel: " + str(self.fuel))
        print("Mileage: " + str(self.mileage))
        print("Tax rate: " + self.tax)





honda = car(9000, 60, '1/4', 130000)
tesla = car(90000, 120, 'full', 4000)
BMW = car(40000, 90, "1/3", 20000)
porche = car(60000, 130, "1/8", 300)
delorean = car(15000, 88, "empty", 10000000000)
batmobile = car(1000000, 150, "full", 30000)

print(honda.price)
print(tesla.price)

honda.display_all()
tesla.display_all()
BMW.display_all()
porche.display_all()
delorean.display_all()
batmobile.display_all()


