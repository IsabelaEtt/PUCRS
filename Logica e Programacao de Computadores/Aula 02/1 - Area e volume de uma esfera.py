# Algoritmo para calcular volume e área de uma esfera

import math

raio = float(input("Insira o raio da sua esfera: "))

volume = 4/3 * math.pi * raio**3
area = 4 * math.pi * math.pow(raio, 2)

print("O volume da esfera é %.2f" % volume)
print("A área da esfera é %.2f" % area)