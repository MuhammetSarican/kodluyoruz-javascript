let url = "www.kodluyoruz.org";
let language = "Java";

// Soru 1: Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.

// Çözüm:
console.log(language.replace('Java','JavaScript'))

// Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.

// Çözüm:
let domain=url.slice(url.indexOf('.')+1)
console.log(domain)