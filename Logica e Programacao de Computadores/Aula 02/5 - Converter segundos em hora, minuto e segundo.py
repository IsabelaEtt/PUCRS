# Algoritmo para transformar um valor em segundos para hora, minuto, segundo

tempo = int(input("Informe a quantidade de segundos:" ))

horas = tempo // 3600
minutos = tempo % 3600 // 60
segundos = tempo % 3600 % 60

print("Se passou %d horas %d minutos %d segundos" % (horas, minutos, segundos))
