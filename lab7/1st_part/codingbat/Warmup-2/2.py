def string_splosion(s):
    result = ""
    for i in range(len(s) + 1): 
        result += s[:i] 
    return result
print(string_splosion('Code'))