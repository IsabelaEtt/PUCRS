# Algoritmo para calcular media ponderada, onde a nota mais alta tem peso 5 e as demais 2.5

def getUserInput(testName):
    try:
        score = float(input(testName + " - nota obtida (Insira um valor entre 0 e 10): \n"))

        if score < 0 or score > 10:
            print("Por favor, insira uma nota válida")
        else:
            return score
    except ValueError:
        print("Por favor, insira um número válido")

    return getUserInput(testName)

scores = []
for x in range(3):
    testName = "Atividade %d" % (x+1)
    scores.append(getUserInput(testName))

scores.sort(reverse=True)

weightedAverage = 0

for i, score in enumerate(scores):
    if i == 0:
        weightedAverage += score * 0.5
    else:
        weightedAverage += score * 0.25

print("A média ponderada é: %.2f" % (weightedAverage))