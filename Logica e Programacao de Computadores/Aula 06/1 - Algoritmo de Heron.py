# Algoritmo de Heron (calcular raiz) com repeticao indeterminada

import math

num = float(input("Insira o numero que deseja calcular a raiz: "))
margemDeErro = float(input("Insira a margem de erro: "))


raizEncontrada = False
tentativa = 0
aprox = 1

while not raizEncontrada:
    tentativa += 1

    ultimoAprox = aprox
    aprox = (aprox + num / aprox) / 2

    print(f"{tentativa: 3} - {aprox : .5f}")

    if math.fabs(ultimoAprox - aprox) <= margemDeErro:
        raizEncontrada = True


print(f"Raiz aproximada: {aprox : .5f}")