# Algoritmo de Heron (calcular raiz)

import math

num = float(input("Insira o numero que deseja calcular a raiz: "))
tentativas = int(input("Insira o numero max de tentativas: "))
margemDeErro = float(input("Insira a margem de erro: "))

aprox = 1

for count in range(tentativas):
    ultimoAprox = aprox
    aprox = (aprox + num /aprox) / 2
    print(f"{count + 1 : 3} - {aprox : .5f}")

    if math.fabs(ultimoAprox - aprox) <= margemDeErro:
        break

print(f"Raiz aproximada: {aprox : .5f}")