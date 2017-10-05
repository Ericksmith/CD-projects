class Bike(object):
    def  __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayinfo(self):
        print('The price of this bike is {}. It has a max speed of {} and has been only rode {} miles'.format(self.price, self.max_speed, self.miles))
    
    def ride(self):
        print('Riding')
        self.miles += 10
        return self

    def reverse(self):
        print('Reversing')
        if self.miles > 4:
            self.miles -= 5
        return self


    
bike1 = Bike(100, 5)
bike2 = Bike(1000, 20)
bike1.ride().ride().ride().reverse()
bike1.displayinfo()
bike2.ride().ride().reverse().displayinfo()
bike2.reverse().reverse().reverse().reverse().reverse().reverse().displayinfo()
