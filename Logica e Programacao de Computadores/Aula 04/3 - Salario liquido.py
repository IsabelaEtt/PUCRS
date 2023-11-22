# Algoritmo para calucular o salario liquido

salario = float(input("Informe seu salario: "))
dependentes = int(input("Informe a quantidade de dependentes: "))

if salario <= 1212:
    aliquotaInss = 0.075
    parcelaAReduzirInss = 0
    tetoInss = 90.90
elif salario <= 2427.35:
    aliquotaInss = 0.09
    parcelaAReduzirInss = 18.18
    tetoInss = 200.28
elif salario <= 3641.03:
    aliquotaInss = 0.12
    parcelaAReduzirInss = 91
    tetoInss = 345.92
else:
    aliquotaInss = 0.14
    parcelaAReduzirInss = 163.82
    tetoInss = 828.39

inss = salario * aliquotaInss - parcelaAReduzirInss
if inss > tetoInss : inss = tetoInss

baseIrrf = salario - inss - 189.59 * dependentes

if baseIrrf <= 1903.98:
    aliquotaIrrf = 0
    parcelaAReduzirIrrf = 0
elif baseIrrf <= 2826.65:
    aliquotaIrrf = 0.075
    parcelaAReduzirIrrf = 142.80
elif baseIrrf <= 3751.05:
    aliquotaIrrf = 0.15
    parcelaAReduzirIrrf = 354.80
elif baseIrrf <= 4664.68:
    aliquotaIrrf = 0.225
    parcelaAReduzirIrrf = 636.16
else:
    aliquotaIrrf = 0.275
    parcelaAReduzirIrrf = 869.36

irrf = baseIrrf * aliquotaIrrf - parcelaAReduzirIrrf

print("Valor do inss: %.2f" % (inss))
print("Valor do irrf: %.2f" % (irrf))
print("Valor do salario liquido: %.2f" % (salario - inss - irrf))

