def missing_char(s, n):
    return s[:n] + s[n+1:]
print(missing_char('kitten', 1))  
print(missing_char('kitten', 0))  
print(missing_char('hello', 2))   
print(missing_char('python', 5)) 
