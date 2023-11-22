# Algoritmo para determinar as iniciais de um nome

nomeCompleto = input("Insira seu nome: ")

nomeSeparado = nomeCompleto.split()

iniciais = ""

for nome in nomeSeparado:
    if nome.lower() not in ["de", "da", "do", "dos", "das"]:
        iniciais += nome[0].upper() + ". "

print(f"Sua inicial: {iniciais}")