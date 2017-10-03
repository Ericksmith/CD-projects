"""Write a program that prints all the prime numbers and all the perfect squares for all numbers between 100 and 100000.

For all numbers between 100 and 100000 test that number for whether it is prime or a perfect square. If it is a prime number print "Foo". 
If it is a perfect square print "Bar". If it is neither print "FooBar". Do not use the python math library for this exercise. 
For example, if the number you are evaluating is 25, you will have to figure out if it is a perfect square. It is, so print "Bar"."""


def foo_bar():
    for i in range(100, 1000):
        prime = False
        for x in range(2, 100):
            if i % x == 0:
                prime = True
                print(i)
                break
        
foo_bar()