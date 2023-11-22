# Algoritmo para calcular formula de baskara

import math

def getUserInput(varName):
    try:
        return float(input("insira o valor de " + varName + ": \n"))
    except ValueError:
        print("Por favor, insira um número válido")
        return getUserInput(varName)

a = getUserInput("a")
b = getUserInput("b")
c = getUserInput("c")

delta = b ** 2 - 4 * a * c

if delta < 0:
    print("Delta deu negativo :(")
else:
    deltaSqrt = math.sqrt(delta)

    x1 = (- b + deltaSqrt) / (2 * a)
    x2 = (- b - deltaSqrt) / (2 * a)

    print("Resposta: %.2f ou %.2f" % (x1, x2))

