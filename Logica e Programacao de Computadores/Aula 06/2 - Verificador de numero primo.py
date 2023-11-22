def verificaDivisores (num):
    divisores = []
    for i in range(1, num+1):
        if num % i == 0:
            divisores.append(i)

    return divisores

numero = int(input("Insira um número: "))

if len(verificaDivisores(numero)) == 2:
    print(f"{numero} é um número primo")
else:
    print(f"{numero} não é um número primo")
