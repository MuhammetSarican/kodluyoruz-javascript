let user='hakan'
let price=100

console.log('== : ',price==1)
console.log('== : ',price==100)

console.log(user=='muhammet')
console.log(user!='guest')

console.log('< : ',price<1000)
console.log('<= : ',price<1000)

console.log('> : ',price>100)
console.log('>= : ',price>100)

console.log('&& : ',price==100 && user!='guest')
console.log('|| : ',price<100 || user!='guest')

console.log('! : ',!(price<100 || !user=='hakan'))

console.log(!!2)