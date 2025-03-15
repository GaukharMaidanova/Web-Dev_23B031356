def not_string(s):
    if s.startswith("not"):
        return s
    return "not " + s
print(not_string('candy'))  
print(not_string('x'))