def valid (self,stack):
    stack = []
    str = {")":"(","]":"[","}":"{"}
    if str in stack == 0:
        return True
    else: return False

