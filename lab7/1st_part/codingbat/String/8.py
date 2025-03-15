def end_other(a, b):
    a, b = a.lower(), b.lower()  
    return a.endswith(b) or b.endswith(a)  
print(end_other('Hiabc', 'abc'))    
print(end_other('AbC', 'HiaBc'))    
print(end_other('abc', 'abXabc'))   
