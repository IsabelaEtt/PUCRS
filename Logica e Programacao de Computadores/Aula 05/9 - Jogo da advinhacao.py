# Algoritmo para o jogo da advinhacao

import random

numero = random.randint(0, 1000)

for count in range(1, 11):
    tentativa = int(input(f"Tentativa {count} - Insira seu chute: "))

    if numero < tentativa:
        print("Tente um numero menor...")
    elif numero > tentativa:
        print("Tente um numero maior...")
    else:
        vitoria = True
        break

    vitoria = False

if vitoria:
    print(f"Parabens!! Voce acertou o numero {numero}")
else:
    print(f"Nao foi dessa vez... o numero era {numero}")
