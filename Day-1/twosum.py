def twosum(nums,target):
    for i in range(0,len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]+nums[j]==target:
                return[i,j]
            
nums=[1,2,3,4,5]
target=6
ret=twosum(nums,target)
print(ret)

