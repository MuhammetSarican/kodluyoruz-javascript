let email='muhammetsarican@gmail.com'
let firstName='muhammet'
let lastName='sarican'

// string number of the characters
console.log(email.length)
// the first character
console.log(firstName[0])
console.log(lastName.charAt(1))
// upper and lower
console.log(firstName.toLowerCase())
console.log(lastName.toUpperCase())
// searching letter what we want, at the string
console.log(email.search('@'))
console.log(Boolean(email.search('z')))
//  get the string to a certain point
console.log(email.slice(1,10))
console.log(email.slice(15))

console.log(`Get DOMAIN: ${email.slice(email.search('@')+1)}`)
// change the information
console.log(firstName.replace('t','d'))
//  get index
console.log('get index of letter:/. in email variable is '+email.indexOf('.'))
// getting DOMAIN name
console.log(`getting name of DOMAIN company name: ${email.slice(email.search('@')+1,email.indexOf('.'))}`)
// if contains
console.log('Have the firstName /æ:'+firstName.includes('æ'))
console.log('Have the email /@:'+email.includes('@'))
console.log(`Have the lastName /asd: `+lastName.includes('asd'))

// the variable starts with your wanted letter or not
console.log('is the firstName starting with /x: '+firstName.startsWith('x'))
console.log('is the lastName ending with /n: '+lastName.endsWith('n'))
// changing first letter with upper case letter
console.log('changing first letter with upper case letter in firstName: '+firstName.replace(firstName[0],firstName[0].toUpperCase()))
console.log('changing first letter with upper case letter in lastName: '+lastName[0].toUpperCase()+lastName.slice(1))
console.log('fullName: '+firstName[0].toUpperCase()+firstName.slice(1).toLocaleLowerCase()+' '+lastName[0].toUpperCase()+lastName.slice(1).toLocaleLowerCase())

// lastIndexOf returns last index of searched letter
console.log('last index of searched letter: '+firstName.lastIndexOf('m'))

// concat provides merge two vocab
console.log('merging 2 vocab: '+firstName.concat(' ',lastName))
// finding letter with index number
console.log('finding letter: '+firstName.charAt(1))
// finding unicode value with charCodeAt
console.log('unicode: '+firstName.charCodeAt(0))
// changing vocab to array with split method
var emailArray=email.split('@')
console.log('changedToArray: ',emailArray)