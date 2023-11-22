# Algoritmo para determinar se uma senha e forte

import string

senha = input("Insira sua senha: ")

tamMin = len(senha) >= 8
letraMinuscula = False
letraMaiuscula = False
numero = False
especial = False

for caractere in senha:
    if caractere in string.ascii_lowercase:
        letraMinuscula = True
    if caractere in string.ascii_uppercase:
        letraMaiuscula = True
    if caractere in string.digits:
        numero = True
    if caractere in string.punctuation:
        especial = True

if not tamMin:
    print("Precisa ter no minimo 8 carcteres")

if not letraMinuscula:
    print("Precisa ter no minimo 1 letra minuscula")

if not letraMaiuscula:
    print("Precisa ter no minimo 1 letra maiuscula")

if not numero:
    print("Precisa ter no minimo 1 numero")

if not especial:
    print("Precisa ter no minimo 1 caractere especial")

if tamMin and letraMinuscula and letraMaiuscula and numero and especial:
    print("Senha valida!!")
