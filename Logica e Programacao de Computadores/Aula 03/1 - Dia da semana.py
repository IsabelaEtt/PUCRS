# Algoritmo para converter um numero inserido pelo usuario em um dia da semana

def getUserInput():
    try:
        day = int(input("Insira o dia da semana: (Insira um número entre 1 e 7)\n"))

        if day < 1 or day > 7:
            print("Por favor, insira um dia de semana válido")
        else:
            return day
    except ValueError:
        print("Por favor, insira um número válido")

    return getUserInput()

def weekdayName(weekday):
    if weekday == 1:
        return "domingo"
    if weekday == 2:
        return "segunda"
    if weekday == 3:
        return "terça"
    if weekday == 4:
        return "quarta"
    if weekday == 5:
        return "quinta"
    if weekday == 6:
        return "sexta"
    if weekday == 7:
        return "sabado"

selectedDay = getUserInput()
print("Vocês escolheu %s!" % (weekdayName(selectedDay)))

