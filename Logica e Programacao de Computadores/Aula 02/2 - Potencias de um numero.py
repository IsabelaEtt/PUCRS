# Algoritmo para calcular potências de um número

import math

num = int(input("Insira o número que você quer calcular a potência: "))
potMax = int(input("Insira até que número você quer calcular: ")) + 1

for potencia in range(potMax):
    print("%d elevado a %d é %d" % (num, potencia, math.pow(num, potencia)))