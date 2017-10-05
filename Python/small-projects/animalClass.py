class animal(object):

    def __init__(self, name, health):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -+ 5
        return self

    def display_health(self):
        print('Current health: ' + str(self.health))
        return self


class dog(animal):

    def __init__(self, name, health):
        super(dog, self).__init__(name, health)
        self.health = 50

    def pet(self):
        self.health += 5
        return self

class dragon(animal):
    def __init__(self, name, health):
        super(dragon, self).__init__(name, health)
        self.health = 170
        
    def fly(self):
        self.health -= 10
        return self

    def display_health(self):
        print("I am a dragon!")
        super(dragon,self).display_health()
        return self



gibbon = animal("Gibbon", 50)
print(gibbon.health)
Fidget = dog("Fidget", 100)
print(Fidget.health)
drogo = dragon('drogo', 100)
drogo.display_health()

Fidget.walk().walk().walk().pet().display_health()
drogo.fly().fly().fly().display_health()

