def sortedSquares(self, nums) :
        squares = [num * num for num in nums]
        squares.sort()
        return squares