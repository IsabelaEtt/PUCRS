const aaa = [1, 2, 3, 4, 5]

const b = aaa.values()
const c = aaa.values()

aaa[2] = 'abc'
// b[3] = 'lala'
// c[1] = 'piu piu'

console.log('aaa', aaa)
console.log('b', b[0])
console.log('c', c)

for (const n of b) {
    console.log(n)
}