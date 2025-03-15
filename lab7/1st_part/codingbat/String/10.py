def xyz_there(s):
    return ".xyz" not in s.replace("xyz", "_xyz")
print(xyz_there('abcxyz'))  
print(xyz_there('abc.xyz'))  
print(xyz_there('xyz.abc')) 
