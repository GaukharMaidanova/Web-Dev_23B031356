def close_far(a, b, c):
    close = lambda x: abs(a - x) <= 1
    far = lambda x, y: abs(a - x) >= 2 and abs(b - x) >= 2
    return (close(b) and far(c, b)) or (close(c) and far(b, c))
print(close_far(1, 2, 10))  
print(close_far(1, 2, 3))   
print(close_far(4, 1, 3))   
