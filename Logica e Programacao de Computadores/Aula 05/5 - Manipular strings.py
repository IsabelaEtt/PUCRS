# Algoritmos para manipular strings

# Slicing
texto = "Minha string"
print(" 1 - " + texto[0])
print(" 2 - " + texto[11])
print(" 3 - " + texto[-1])
print(" 4 - " + texto[-12])
print(" 5 - " + texto + " bonita")
print(" 6 - " + texto * 4)
print(" 7 - " + texto * 4 + " bonita")
print(" 8 - " + texto[4:10])
print(" 9 - " + texto[:5])
print("10 - " + texto[:-1])
print("11 - " + texto[6:])
print("12 - " + texto[-6:])
print("13 - " + texto[6:11:2])
print("14 - " + texto[:8:2])
print("15 - " + texto[::2])
print("16 - " + texto[::-1])
print("17 - " + texto[::-2])


texto1 = "texto"
texto2 = "outro texto"

# Comparacao
if texto1 < texto2:
    print(f"{texto1} vem primeiro")
elif texto2 < texto1:
    print(f"{texto2} vem primeiro")
else:
    print(f"{texto1} e {texto2} sao iguais")


# Pertencimento
if texto1 in texto2:
    print(f"{texto1} ta dentro de {texto2}")
elif texto2 in texto1:
    print(f"{texto2} ta dentro de {texto1}")
else:
    print(f"{texto1} e {texto2} sao totalmente diferentes")


# Comprimento
print(f"A frase '{texto}' possui {len(texto)} carcteres")


# Loop nos caracters
print("---------")
for caractere in texto:
    print(caractere)

print("---------")
for pos in range(len(texto)):
    print(texto[pos])

print("---------")

