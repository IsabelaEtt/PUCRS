import locale
import calendar

locale.setlocale(locale.LC_ALL, 'pt_BR')

monthsTemperatures = {}

def getMonth():
    try:
        month = int(input("Qual mês você gostaria de registar? (Insira um número entre 1 e 12)\n"))

        if month < 1 or month > 12:
            print("Por favor, insira um mês válido")
        elif month in monthsTemperatures:
            print("Você já informou esse mês, por favor insira outro")
        else:
            return month
    except ValueError:
        print("Por favor, insira um número válido")

    return getMonth()

def getTemperature():
    try:
        temperature = float(input("Qual foi a temperatura registrada nesse mês? (deve estar entre o intervalo de -60 graus e 50 graus)\n"))

        if temperature < -60 or temperature > 50:
            print("Por favor, insira uma temperatura válida")
        else:
            return temperature
    except ValueError:
        print("Por favor, insira um número válido")

    return getTemperature()

print("Bem vindo, vamos analisar a temperatura máxima anual")

for x in range(12):
    month = getMonth()
    temperature = getTemperature()

    monthsTemperatures[month] = temperature

firstMonth = list(monthsTemperatures.keys())[0]
mostScorchingMonth = coldestMonth = firstMonth
highestTemperature = lowestTemperature = monthsTemperatures[firstMonth]
sumTemperatures = 0.0
scorchingMonths = 0

for month, temperature in monthsTemperatures.items():
    if highestTemperature < temperature:
        highestTemperature = temperature
        mostScorchingMonth = month

    if lowestTemperature > temperature:
        lowestTemperature = temperature
        coldestMonth = month

    if temperature > 38:
        scorchingMonths += 1

    sumTemperatures += temperature

averageTemperature = sumTemperatures / 12

print("\n------- RESULTADO -------\n")
print("A temperatura máxima média foi de %.2f graus " % (averageTemperature))
print("Houve um total de %d meses escaldantes, isto é, com temperatura acima de 38 graus" % (scorchingMonths))
print("O mês mais quente foi %s, com %.2f graus " % (calendar.month_name[mostScorchingMonth], highestTemperature))
print("O mês menos quente foi %s, com %.2f graus " % (calendar.month_name[coldestMonth], lowestTemperature))