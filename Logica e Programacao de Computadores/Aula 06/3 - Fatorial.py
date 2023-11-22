# Algortimo que calcula o fatorial de todos os numeros de 0 a 100

for i in range(101):
    if i < 2:
        fat = 1
    else:
        fat = i * fat

    print(f"O fatorial de {i} é {fat}")