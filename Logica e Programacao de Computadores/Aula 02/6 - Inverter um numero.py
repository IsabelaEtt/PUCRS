# Algoritmo para decompor um valor para inverter um número

num = int(input("Insira um número inteiro de 4 digitos: "))

milhar = num // 1000
centena = num % 1000 // 100
dezena = num % 100 // 10
unidade = num % 10

inverso = unidade * 1000 + dezena * 100 + centena * 10 + milhar

print("O inverso de %d é %d" % (num, inverso))