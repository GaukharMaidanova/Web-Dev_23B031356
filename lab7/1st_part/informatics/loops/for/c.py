import math
a = int(input())
b = int(input())
start = math.ceil(math.sqrt(a))  
end = math.floor(math.sqrt(b))  
for i in range(start, end + 1):
    print(i * i, end=" ")
