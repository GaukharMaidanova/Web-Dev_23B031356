def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars >= 40 
    else:
        return 40 <= cigars <= 60 
print(cigar_party(30, False))  
print(cigar_party(50, False))  
print(cigar_party(70, True))   
