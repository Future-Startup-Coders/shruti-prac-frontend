def isUgly(self, n) :
        while n >= 1:
            if n%2 == 0:
                 n=n//2
            elif n%3 == 0:
                n=n//3
            elif n%5 == 0:
                n=n//5
            elif n == 1:
                return True
            else:
                return False
        return False 