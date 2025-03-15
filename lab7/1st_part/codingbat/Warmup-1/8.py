def front_back(s):
    if len(s) <= 1:
        return s  
    return s[-1] + s[1:-1] + s[0]  
print(front_back("code"))
