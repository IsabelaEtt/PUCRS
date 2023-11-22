# Algoritmo para calcular quantos dias o mês teve

mes = int(input("Informe o mes que deseja consultar: "))
ano = int(input("Informe o ano que deseja consultar: "))

bissexto = (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0

if mes == 2:
    if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
        print("29 dias")
    else:
        print("28 dias")
elif mes == 4 or mes == 6 or mes == 9 or mes == 11:
    print("30 dias")
else:
    print("31 dias")
