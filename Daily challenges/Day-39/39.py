def sumOfUnique(self, nums) :
        res = []
        for i in nums:
            if nums.count(i) > 1:
                continue
            else:
                res.append(i)
        return sum(res)