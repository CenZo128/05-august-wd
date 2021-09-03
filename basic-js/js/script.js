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
 *  - Min tinggi harus 150 cm
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
//         if(height >= 150){
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

let num = 10;
for(let i = 1; i <= num; i++){
    if(i % 2 === 0){
        console.log(i + " adalah genap");
    }else if(i % 2 === 1){
        console.log(i + " adalah ganjil");
    }
}
