def strStr(self, haystack, needle) :
        a, b = len(haystack), len(needle)

        for i in range(a - b + 1):
            if haystack[i:i + b] == needle:
                return i

        return -1