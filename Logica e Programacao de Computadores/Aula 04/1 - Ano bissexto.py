# Algoritmo para calcular se um ano é bissexto

ano = int(input("Informe o ano que deseja consultar: "))

if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
    print("%d é um ano bissexto" % (ano))
else:
    print("%d não é um ano bissexto" % (ano))
