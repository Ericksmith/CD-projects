import datetime

class phoneCall(object):
    def __init__(self, id, name, phoneNum, time, reason):
        self.id = id 
        self.name = name 
        self.phoneNum = phoneNum 
        self.time = time
        self.reason = reason

    def display(self):
        print("id:" + str(self.id))
        print("Name: " + str(self.name))
        print("Phone number: " + str(self.phoneNum))
        print("Time: " + str(self.time))
        print("Reason for call:" + str(self.reason))
        return self
     
class call_center(object):
    def __init__(self):
        self.calls = []
        self.queue_size = len(self.calls)

    def call(self, call):
        self.calls.append(call)
        self.queue_size = len(self.calls)
        return self
    
    def removeCall(self):
        self.calls.pop(0)
        return self

    def removeCallerNum(self, phoneNum):
        for i, item in enumerate(self.calls):
            if item.phoneNum == phoneNum:
                self.calls.pop(i)
        return self
    
    def info(self):
        print('There are {} holding'.format(str(self.queue_size)))
        for callData in self.calls:
            print('Caller name {} from {}'.format(str(callData.name), str(callData.phoneNum)))
        return self

    def sortCalls(self):
        i = 0
        while(i < len(self.calls) -1):
            if int(self.calls[i].time) > int(self.calls[i + 1].time):
                self.calls[i], self.calls[i+1] = self.calls[i+1], self.calls[i]
                i = 0
            else:
                i += 1
        




call1 = phoneCall("1", "Ken M", "555-5555", "1230", "reverse morgage")
call2 = phoneCall("2", "I.P Freely", "555-4444", "430", "Buy a shake weight")
call3 = phoneCall("3", "Amanda Hugnkis", "555-3333", "130", "Deleted system32.exe")


center1 = call_center()
center1.call(call1).call(call2).call(call3)
center1.info()
center1.sortCalls()
center1.info()
center1.removeCall()
center1.info()
center1.removeCallerNum("555-3333")
center1.info()
