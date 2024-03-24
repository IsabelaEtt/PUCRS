// Aeronave
export const tiposAeronaveComercial = ['CC', 'CP']
export const tiposAeronaveParticular = ['PP']
export const tiposAeronave = [...tiposAeronaveComercial, ...tiposAeronaveParticular]

// Dados
export const tiposDados = new Map([
    ['aeronave', {
        headers: ['prefixo', 'tipo', 'velocidade', 'autonomia', 'nomeCIA', 'pesoMax', 'maxPassageiros', 'respManutencao'],
        nome: './Dados/aeronave.csv'
    }],
    ['aerovia', {
        headers: ['id', 'origem', 'destino', 'tamanho'],
        nome: './Dados/aerovia.csv'
    }],
    ['piloto', {
        headers: ['nome', 'matricula', 'habilitacaoAtiva'],
        nome: './Dados/piloto.csv'
    }]
])