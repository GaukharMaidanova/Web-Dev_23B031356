if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))  
    first = max(arr)  
    runner_up = max(x for x in arr if x != first)
    print(runner_up)