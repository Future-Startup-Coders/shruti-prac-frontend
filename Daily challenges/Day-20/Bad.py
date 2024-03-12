def firstBadVersion(self, n):
        left = 1
        right = n

        while left <= right:
            mid = (left + right) >> 1

            if firstBadVersion(mid):
                right = mid - 1
            else:
                left = mid + 1

        return left