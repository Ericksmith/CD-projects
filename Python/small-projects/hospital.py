import random

class hospital(object):
    def __init__(self, name, capacity):
        self.patients = []
        self.name = name
        self.capacity = capacity
        self.patientCount = len(self.patients)

    def admit(self, newPt):
        if self.patientCount < self.capacity:
            newPt.bedNum = random.randint(1,100)
            self.patients.append(newPt)
            self.patientCount = len(self.patients)
            print("New patient admitted")
        else:
            print("All beds are full, please wait in triage.")
        return self
    
    def discharge(self, leavingPt):
        for person in self.patients:
            self.patients[person].remove(leavingPt)
        return self

class patient(object):
    def __init__(self, id, name, allergies):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bedNum = None

JohnDoe = patient(1, "John Doe", 'Toradol')
USCKeck = hospital("USC Keck", 3)
USCKeck.admit(JohnDoe)
print(USCKeck.patientCount)
