#!/usr/bin/python

#[HL-2010-08-27 06:07] 
# Testing generator function.. doesn't seem to work so well
# http://stackoverflow.com/questions/102535/what-can-you-use-python-generator-functions-for

import time

# Function version
def fibonA(n):
    a = b = 1
    result = []
    for i in xrange(n):
        time.sleep(1)
        result.append(a)
        a, b = b, a + b
    return result

# Generator version
def fibonB(n):
    a = b = 1
    for i in xrange(n):
        time.sleep(1)
        yield a
        a, b = b, a + b


if __name__ == "__main__":
    print "fibonA"
    for x in fibonA(5):
        print x,

    print "\nfibonB"
    for x in fibonB(5):
        print x,
