import re
def count_code(s):
    return len(re.findall(r'co.e', s))

print(count_code('aaacodebbb')) 
print(count_code('codexxcode'))  
print(count_code('cozexxcope')) 
