# Algoritmo para fazer diversos calculos com 2 numeros

import math

x = int(input("Insira o primeiro número: "))
y = int(input("Insira o segundo número: "))

print("%d + %d = %d" % (x, y, x+y))
print("%d - %d = %d" % (x, y, x-y))
print("A média entre %d e %d é %.2f" % (x, y, (x+y)/2))
print("A distância entre %d e %d é %d" % (x, y, math.fabs(x-y)))
print("O maior entre %d e %d é %d" % (x, y, (x + y + math.fabs(x-y))/2))
print("O menor entre %d e %d é %d" % (x, y, (x + y - math.fabs(x-y))/2))
