console.log("deneme");


let email = "egetek86@gmail.com"
console.log(email)

// birleştirme 

let ad = "Egemen";
let soyad = "Tekkanat";
let adsoyad = ad + " " + soyad
console.log(adsoyad)

// karakterleri çekme

console.log(adsoyad[2]);

// kaç karakter 

console.log(adsoyad.length);

// tüm karakterelri büyük yapma
console.log(adsoyad.toUpperCase());
// tüm karakterelri küçük yapma
console.log(adsoyad.toLocaleLowerCase());

//index değerini çekme
let index = adsoyad.indexOf("T");
console.log("T harfinin indeksi : " +index);