// Temel Kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
// 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir.
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir. Misal, fonksiyon parantezi içinde değişken tanımlayıp boş değer atamak.

let firstName='Lorem'

function greetings(firstname=""){
    // console.log(`Merhaba ${firstName ? firstName :""}`)
    console.log("Merhaba",firstname)

}

greetings("")
greetings("Parametre")

function greetings_2(firstName="",lastName=""){
    let info=`Merhaba, ${firstName+' '+lastName}`
    return info
}

console.log(greetings_2('Muhammet','Sarıcan'))

function greetings_changer(id){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=greetings_2('Muhammet','Sarıcan')
}
greetings_changer('info')