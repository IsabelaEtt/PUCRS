export function validarNumero (numero) {
    return !isNaN(numero) && numero > 0
}

export function validarTipo (tipo, tiposPermitidos) {
    return tiposPermitidos.includes(tipo)
}