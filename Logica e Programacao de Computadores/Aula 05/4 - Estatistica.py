# Algoritmo para calcular estatisticas sobre alunos de uma faculdade

import random

totalAlunosEntrevistados = 100

somaIdades = 0
cursoMaisVelho = ""
idadeMaisVelho = 0
qtdAlunos5Semestre = 0

for i in range (totalAlunosEntrevistados):
    idade = random.randint(18, 60)
    curso = random.choice(["Medicina", "Engenharia", "Computacao", "Design", "Musica", "Direito", "Matematica"])
    semestre = random.randint(1, 10)

    somaIdades += idade
    if idade > idadeMaisVelho:
        idadeMaisVelho = idade
        cursoMaisVelho = curso

    if semestre == 5:
        qtdAlunos5Semestre += 1

mediaIdades = somaIdades / totalAlunosEntrevistados

print(f"Media de idade dos alunos: {mediaIdades}")
print(f"Idade do aluno mais velho: {idadeMaisVelho}")
print(f"Curso do aluno mais velho: {cursoMaisVelho}")
print(f"Quantidade de alunos no quinto semestre: {qtdAlunos5Semestre}")

