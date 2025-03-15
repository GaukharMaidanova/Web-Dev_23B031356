def sum13(nums):
    total = 0
    skip = False  
    for num in nums:
        if num == 13:
            skip = True  
        elif skip:
            skip = False  
        else:
            total += num  
    return total
print(sum13([1, 2, 2, 1]))  
print(sum13([1, 1]))        
print(sum13([1, 2, 2, 1, 13]))  
print(sum13([13, 1, 2, 3]))  
print(sum13([13, 13, 2, 3])) 
