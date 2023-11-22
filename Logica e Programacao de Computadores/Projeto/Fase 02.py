# Isabela Canelas Ett

from datetime import datetime
import locale
import calendar
import matplotlib.pyplot as plt

locale.setlocale(locale.LC_ALL, 'pt_BR')

class MeteorologicalData:
    def __init__(
            self,
            date,
            precipitationAmount,
            maxTemperature,
            minTemperature,
            sunshineHours,
            avgTemperature,
            relativeHumidity,
            windSpeed
    ):
        self.date = datetime.strptime(date, "%d/%m/%Y")
        self.precipitationAmount = float(precipitationAmount)
        self.maxTemperature = float(maxTemperature)
        self.minTemperature = float(minTemperature)
        self.sunshineHours = float(sunshineHours)
        self.avgTemperature = float(avgTemperature)
        self.relativeHumidity = float(relativeHumidity)
        self.windSpeed = float(windSpeed)

## Reading CSV file
csv = open("Anexo_Arquivo_Dados_Projeto_Logica_e_programacao_de_computadores.csv", "r")
next(csv) # skip csv headers

allMeteorologicalData = []
for line in csv:
    dayInfo = line.split(",")

    date = dayInfo[0]
    precipitationAmount = dayInfo[1]
    maxTemperature = dayInfo[2]
    minTemperature = dayInfo[3]
    sunshineHours = dayInfo[4]
    avgTemperature = dayInfo[5]
    relativeHumidity = dayInfo[6]
    windSpeed = dayInfo[7]

    newData = MeteorologicalData(date, precipitationAmount, maxTemperature, minTemperature, sunshineHours, avgTemperature, relativeHumidity, windSpeed)
    allMeteorologicalData.append(newData)

csv.close()
# Application functions
def startApplication ():
    print("Bem vindo a base de dados metereológicos de Porto Alegre! :)")
    showMainMenu()

def continueApplication ():
    print("\nVoltando para o menu principal...")
    showMainMenu()

def endApplication():
    print("\nTchau :)")
    exit()

def showMainMenu():
    print("\nO que você deseja fazer?")
    print("1) Consultar dados de um periodo especifico")
    print("2) Consultar mes menos chuvoso")
    print("3) Consultar média da temperatura mínima de um determinado mês nos últimos 11 anos")
    print("4) Consultar gráfico com as médias de temperatura mínima de um determinado mês nos últimos 11 anos")
    print("5) Sair")

    try:
        userChoice = int(input("Insira sua opção: "))

        if userChoice >= 1 and userChoice <= 4:
            if userChoice == 1: checkDataFromPeriod()
            elif userChoice == 2: checkDriestMonth()
            elif userChoice == 3: checkAvgMinTemperature()
            elif userChoice == 4: generateAvgMinTemperatureGraph()
            return continueApplication()
        elif userChoice == 5: return endApplication()

        print("\nPor favor, insira uma opção válida")
    except ValueError:
        print("\nPor favor, insira um número válido")

    return showMainMenu()


# Options functions
def checkDataFromPeriod():
    initYear = getYear("A partir de que ano você gostaria de visualizar os dados?")
    initMonth = getMonth(f"A partir de qual mês de {initYear}?")
    initDate = datetime.strptime(f"{initMonth}/{initYear}", "%m/%Y")

    endYear = getYear("Até que ano você gostaria de visualizar os dados?")
    endMonth = getMonth(f"Até qual mês de {endYear}?")
    endDate = datetime.strptime(f"{endMonth}/{endYear}", "%m/%Y")

    if initDate > endDate:
        aux = initDate
        initDate = endDate
        endDate = aux

    selectedOption = showOption1Menu()

    for dayInfo in allMeteorologicalData:
        infoMonthYear = datetime.strptime(f"{dayInfo.date.month}/{dayInfo.date.year}", "%m/%Y")
        if infoMonthYear < initDate or infoMonthYear > endDate: continue

        print(f"\nData: {dayInfo.date.strftime('%d/%m/%Y')}")

        if selectedOption in [1]:
            print(f"\tHoras insolação: {dayInfo.sunshineHours}")

        if selectedOption in [1, 2]:
           print(f"\tPreciptação: {dayInfo.precipitationAmount}")

        if selectedOption in [1, 3]:
            print(f"\tTemperatura máxima: {dayInfo.maxTemperature}")
            print(f"\tTemperatura mínima: {dayInfo.minTemperature}")
            print(f"\tTemperatura média: {dayInfo.avgTemperature}")

        if selectedOption in [1, 4]:
            print(f"\tUmidade relativa: {dayInfo.relativeHumidity}")
            print(f"\tVelocidade do vento: {dayInfo.windSpeed}")

def checkDriestMonth():
    precipitationDict = {}

    for dayInfo in allMeteorologicalData:
        dictId = f"{dayInfo.date.month}/{dayInfo.date.year}"

        if dictId not in precipitationDict: precipitationDict[dictId] = 0
        precipitationDict[dictId] += dayInfo.precipitationAmount

    driestPeriod = list(precipitationDict.keys())[0]
    for period, precipitation in precipitationDict.items():
        if precipitation < precipitationDict[driestPeriod]:
            driestPeriod = period

    month = driestPeriod.split('/')[0]
    year = driestPeriod.split('/')[1]

    print(f"\n{calendar.month_name[int(month)]} de {year} foi o mês com menor preciptação, tendo registrado apenas {precipitationDict[driestPeriod] : .2f} mm")

def checkAvgMinTemperature():
    month = getMonth("Qual mês voce gostaria de consultar?")
    avgMinTemperatureDict = getMonthAvgMinTemperatureDict(month)

    sumAvgMinTemperature = 0
    totalYears = 1

    for year, avgMinTemperature in avgMinTemperatureDict.items():
        sumAvgMinTemperature += avgMinTemperature
        totalYears += 1

        print(f"Em {year} a temperatura mínima média de {calendar.month_name[int(month)]} foi {avgMinTemperature : .2f} graus")

    generalAvgMinTemperature = sumAvgMinTemperature / totalYears

    print(f"Entre 2006 e 2016, a temperatura mínima média de {calendar.month_name[int(month)]} foi {generalAvgMinTemperature : .2f} graus")

def generateAvgMinTemperatureGraph():
    month = getMonth("Qual mês voce gostaria de consultar?")
    avgMinTemperatureDict = getMonthAvgMinTemperatureDict(month)

    temperatures = []
    years = []

    for year, avgMinTemperature in avgMinTemperatureDict.items():
        temperatures.append(avgMinTemperature)
        years.append(int(year))

    plt.bar(years, temperatures)
    plt.xticks(range(2006, 2017))
    plt.xlabel("Anos")
    plt.ylabel("Temperatura mínima média")
    plt.show()

# Aux functions
def getYear(inputString):
    try:
        year = int(input(f"\n{inputString} (Insira um ano entre 1961 e 2016): "))

        if year >= 1961 and year <= 2016: return year

        print("\nPor favor, insira um ano válido")
    except ValueError:
        print("\nPor favor, insira um número válido")

    return getYear(inputString)

def getMonth(inputString):
    try:
        month = int(input(f"\n{inputString} (Insira um número entre 1 e 12): "))

        if month >= 1 and month <= 12: return month

        print("\nPor favor, insira um mês válido")
    except ValueError:
        print("\nPor favor, insira um número válido")

    return getMonth(inputString)

def showOption1Menu():
    print("\nO que você deseja visualizar?")
    print("1) Todos os dados do período informado")
    print("2) Apenas os dados de precipitação")
    print("3) Apenas os dados de temperatura")
    print("4) Apenas os dados de umidade e vento")

    try:
        userChoice = int(input("Insira sua opção: "))

        if userChoice >= 1 and userChoice <= 4: return userChoice

        print("\nPor favor, insira uma opção válida")
    except ValueError:
        print("\nPor favor, insira um número válido")

    return showOption1Menu()

def getMonthAvgMinTemperatureDict(month):
    minTemperatureInfoDict = {}
    avgMinTemperatureDict = {}

    for dayInfo in allMeteorologicalData:
        infoMonth = dayInfo.date.month
        infoYear = dayInfo.date.year

        if infoMonth != month: continue
        if infoYear < 2006 or infoYear > 2016: continue

        if infoYear not in minTemperatureInfoDict:
            minTemperatureInfoDict[infoYear] = dict(
                temperatureSum = 0,
                totalDays = 0
            )

        minTemperatureInfoDict[infoYear]["temperatureSum"] += dayInfo.minTemperature
        minTemperatureInfoDict[infoYear]["totalDays"] += 1
        avgMinTemperatureDict[infoYear] = minTemperatureInfoDict[infoYear]["temperatureSum"] / minTemperatureInfoDict[infoYear]["totalDays"]

    return avgMinTemperatureDict

# Start application
startApplication()
