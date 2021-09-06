/**
 * Basic JS ES5 - ES6
 * 
 * 1. Variable : Tipe Data, Operations
 * 2. Conditional
 * 3. Looping
 * 4. Array : 1D dan 2D
 * 5. Function
 * 6. Object
 * 7. DOM JS
 */

// console.log("Hello World!")
// console.log("Belajar JS")
// document.write("Hello World");

// Variable : penampung suatu value (var,let,const)

// Tipe Data Primitif
/**
 * 1. Number    : 10, 2.5, -3
 * 2. String    : "abc", "z", "1", "!@#", " "
 * 3. Boolean   : true, false
 * 4. Object
 * 5. undefined
 * 6. Null
 */

// Operations : Logic dan Math

// // math
// let x = 9;
// let y = 3;
// let total = x % y;
// document.write("Total : ", total);

// logic
// AND (&&), OR (||), NOT (!), NOT EQUAL (!=), EQUAL (==)

// let a = 1;
// let b = "1";
// let compare = a === b;
// document.write("Compare : ", compare);

// Conditional : if ... else, switch ... case

// let item = "laptop";
// if(item === "laptop"){
//     console.log("item adalah laptop");
// }else if(item === "mouse"){
//     console.log("item adalah mouse");
// }else {
//     console.log("item lain nya");
// }

// switch(item){
//     case "laptop":
//         console.log("item dalah laptop")    
//     break;
//     case "mouse":
//         console.log("item adalah mouse")
//         break;
//     default:
//         console.log("item lain nya")
//         break;
// }

// let angka = 0;
// if(angka >= 0){
//     document.write("<h3> Angka Positif </h3>")
//     console.log("<h3> Angka Positif </h3>")
// }else if(angka < 0){
//     document.write("Angka Negatif")
// }else{
//     document.write("Angka nol")
// }

/**
 * Tiket Wahana
 * 
 * RULES!!
 * Jika pengunjung "anak", maka
 *  - Min tinggi harus 150 cm
 *  - Jika kurang maka tidak boleh masuk
 * Jika pengunjung "remaja", maka
 *  - tinggi harus di atas 150 cm
 *  - Jika kurang maka tidak boleh masuk
 * Jika pengunjung "dewasa", maka
 *  - maka langsung masuk
 */

// Nested Conditional
// let visitor = "dewasa";
// let height = 165;

// switch(visitor){
//     case "anak":
//         if(height >= 150){
//             console.log("Anak boleh masuk")
//         }else{
//             console.log("Anak tidak boleh masuk")
//         }
//         // console.log("Anak")
//         break;
//     case "remaja":
//         if(height > 150){
//             console.log("Remaja boleh masuk")
//         }else{
//             console.log("Remaja tidak boleh masuk")
//         }
//         // console.log("Remaja")
//         break;
//     case "dewasa":
//         console.log("Dewasa langsung masuk")
//         break;
//     default:
//         console.log("Masukkan jenis visitor yang tepat.")
//         break;
// }

// Looping : for, while, do ... while
// debugging ; cek flow 1 per 1
// for (let i = 1; i <= 10; i++) {
//     document.write("<p> Hello World </p>");
// }

// Nested Looping

// Array 1D dan 2D
// Array : kumpulang value yang memiliki index secara berurutan
// Array selalu di mulai dari index 0
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[9]);

// for(let i = 0; i < numbers.length; i++){
// console.log(numbers[i]);
// }

let cart = [
    ["eggs", 5, 10000],
    ["milks", 3, 15000],
    ["wools", 2, 25000]
]

// console.log(cart[0][0])
// console.log(cart[1][0])
// console.log(cart[2][0])

/**Study Case
 * 
 * Input : 5
 * 
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 */

// Cari definisi 
// Ganjil tidak habis dibagi 2
// Genap habis dibagi 2

// let num = 10;
// for(let i = 1; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(i + " adalah genap");
//     }else if(i % 2 === 1){
//         console.log(i + " adalah ganjil");
//     }
// }

/**
 * Study Case
 * 
 * let watches = ["Alba","DW","G-Shock","Rolex","Swiss Army"];
 * 
 * Result :
 * Saya punya Alba, DW, G-Shock, Rolex, dan Swiss Army.
 */
// let watches = ["Alba", "DW", "G-Shock", "Rolex", "Swiss Army"];

// let temp = "Saya punya "
// for (let i = 0; i < watches.length; i++) {
//     // console.log(watches[i])
//     if(i !== watches.length - 1){
//         temp = temp + watches[i] + ", "
//     }else{
//         temp += "dan " + watches[i] + "."
//     }
// }
// console.log(temp);

// Function : sekumpulan kode yang hanya melakukan 1 task

// Cek ganjil genap

function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        console.log("Genap")
    } else {
        console.log("Ganjil")
    }
}

// Call / invoke
// cekGenapGanjil(10);
// cekGenapGanjil(5);
// cekGenapGanjil(7);
// cekGenapGanjil(115);
// cekGenapGanjil(12);

/**
 * STUDY CASE
 *
 * Tentukan Bilangan Prima;
 * Input : 5
 * Result : true
 *
 * Input : 10
 * Result : false
 */

// Cari Definisi
/**
 * Bilangan Prima : Bilangan yang memiliki 2 faktor, angka 1 dan bilangan itu sendiri
 *  
 * Contoh : 5
 * Memiliki 2 faktor, 1 dan 5 
 * 
 * Contoh : 10
 * Memiliki 4 faktor, 1 2 5 10
 * 
 * Contoh : 15
 * Memiliki 4 faktor, 1 3 5 15
 * */

function checkPrime(n) {
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            counter++;
        }
    }

    if (counter === 2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
// checkPrime(5)
// checkPrime(10)
// checkPrime(15)

function greeting(name1, name2) {
    console.log("Hello, " + name1 + " dan " + name2);
}

// greeting("Tests","Toast")

function tiketWahana(visitor, height) {
    switch (visitor) {
        case "anak":
            if (height >= 150) {
                console.log("Anak boleh masuk")
            } else {
                console.log("Anak tidak boleh masuk")
            }
            // console.log("Anak")
            break;
        case "remaja":
            if (height > 150) {
                console.log("Remaja boleh masuk")
            } else {
                console.log("Remaja tidak boleh masuk")
            }
            // console.log("Remaja")
            break;
        case "dewasa":
            console.log("Dewasa langsung masuk")
            break;
        default:
            console.log("Masukkan jenis visitor yang tepat.")
            break;
    }
}
// tiketWahana("anak", 170);

// Object : kumpulan value yang miliki key

// let item = ["GTX 1660", "Nvidia", 1000000, true, 5];

let item = {
    name: "GTX 1660",
    brand: "Nvidia",
    price: 1000000,
    isAvailable: true,
    stock: 5
}

// console.log(item);
let students = [
    {
        id: 1,
        name: "James",
        gpa: 3.50
    },
    {
        id: 2,
        name: "Rey",
        gpa: 3.15
    },
    {
        id: 3,
        name: "Cindy",
        gpa: 3.75
    }
]

console.log(students)

let data = [
    {
        id: 1,
        name: "Asus",
        price: 1000,
        image: "http.",
        stock: 5,
        tax: 5,
        category: "laptop",
        city: "Jakarta"
    }
]