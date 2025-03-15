def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5  
    if speed <= 60:
        return 0  
    elif speed <= 80:
        return 1 
    else:
        return 2  
print(caught_speeding(60, False))  
print(caught_speeding(65, False))  
print(caught_speeding(65, True)) 
