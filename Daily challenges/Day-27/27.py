def runningSum(self, nums):
        answerList = []
        sumValue = 0

        for i in range(len(nums)):
            sumValue = sumValue + nums[i]
            answerList.append(sumValue)

        return answerList
        