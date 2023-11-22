# Algoritmo para calucular o limite de uma conta bancaria

def getUserInput():
    try:
        return float(input("Insira o valor do saldo: \n"))
    except ValueError:
        print("Por favor, insira um número válido")
        return getUserInput()

saldo = getUserInput()

if saldo < 500:
    print("Sem limite :(")
elif saldo < 1000:
    print("Limite de %.2f reais (8 por centro do valor do saldo)" % (saldo * 0.08))
else:
    print("Limite de %.2f reais (15 por centro do valor do saldo)" % (saldo * 0.15))