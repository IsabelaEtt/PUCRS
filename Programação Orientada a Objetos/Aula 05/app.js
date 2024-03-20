const map = new Map()
map.set('a', 'aaa')
map.set('b', 'bbb')

// ESSA FUNCOES NAO FUNCIONAM EM OBJETOS

console.log(map.entries()) // transforma o objeto em array
for (const entry of map.entries()) {
    console.log('KEY: ', entry[0], ' - VALUE: ', entry[1])
}

console.log(map.values()) // retorna os valores em array sem as chaves
for (const value of map.values()) {
    console.log('VALUE: ', value)
}

console.log(map.values()) // retorna as chaves em array sem os values
for (const key of map.keys()) {
    console.log('KEY: ', key)
}

console.log(map.get('a')) 
console.log(map.has('a'))
