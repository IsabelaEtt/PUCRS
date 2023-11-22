# Algoritmo para transformar uma temperatura em fahrenheit em celsius

tempF = float(input("Insira a temperatura em Fahrenheit: "))
tempC = 5 / 9 * (tempF - 32)

print("%.2f graus Fahrenheit equivale a %.2f graus Celsius" % (tempF, tempC))