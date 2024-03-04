def lengthOfLastWord(self, s):
    s = s.strip()
    s = s[::-1]
    count = 0
    for i in s :
        if(i!=""):count+=1
        else:break
        return count