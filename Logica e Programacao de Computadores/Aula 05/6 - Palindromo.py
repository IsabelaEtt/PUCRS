# Algoritmo para determinar se uma palavra e palindromo

palavra = input("Insira uma palavra: ")

# Usando loop
for pos in range(len(palavra)):
    if palavra[pos] != palavra[-1-pos]:
        dif = True
        break
    dif = False

if dif:
    print(f"A palavra '{palavra}' nao e um palindromo :(")
else:
    print(f"A palavra '{palavra}' e um palindromo :)")


# Usando manipulacao de strings
if palavra != palavra[::-1]:
    print(f"A palavra '{palavra}' nao e um palindromo :(")
else:
    print(f"A palavra '{palavra}' e um palindromo :)")
