def sortColors(self, nums):
        
        for i in range (len(nums)):
            for j in range (i+1,len(nums)):
                if nums[i] > nums[j]:
                    temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp