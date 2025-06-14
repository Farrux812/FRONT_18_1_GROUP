// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let num = Math.PI
// console.log(num);

// let num2 = -12
// let Num = Math.abs(num2)
// console.log(Num);

// let NUM = Math.max(11, 16, 20);
// console.log(NUM);

// let number = Math.min(11, 16, 20);
// console.log(number);

// let str = "DVD";
// let toPolindrom = str.split('').reverse('').join('')

// if(str===toPolindrom){
//     console.log('Polindrom');
// }
// else{
//     console.log('Polindrom emas');
// }



// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.includes(4)
// console.log(arr2);



// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.pop()
// console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // let arr2 = arr.push(11)
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // let arr2 = arr.push(11,12)
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // let arr2 = arr.splice(6)
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // let arr2 = arr.slice(8)
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // let arr2 = arr.reverse()
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,10]
// // let arr2 = arr.toString()
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.concat(2)
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.map(x => x * 4);
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.filter(x => x % 2 === 0);
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.map(x => x / 6);
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.at()
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.at(4);
// // console.log(arr2);


// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.shift()
// // console.log(arr2);

// // let arr = [1,2,3,4,5,6,7,8,9,0]
// // let arr2 = arr.sort()
// // console.log(arr2);

// function birinchiNolHolati(chiziq){
//     return chiziq.indexOf('0');
// }
// const chiziq = "12310256";
// const result = birinchiNolHolati(chiziq);
// if(result !== -1){
//     console.log(`Birinchi nolning holati: ${result}`);
// }
// else{
//     console.log("Chiziqda nol mavjud emas.");
// }

// // #include <iostream>
// // #include <cmath>
// // using namespace std;

// // int main() {
// //     float n;
// // nishon:
// //     cout << "Natural son kiriting: ";
// //     cin >> n;
// //     if (ceil(n) != n || n <= 0)
// //         goto nishon;
// //     cout << "Natural son kiritildi." << endl;
// //     return 0;
// // }


// console.log(Math.pow(3, 4));

// console.log(Math.pow(2, 10));

// console.log(Math.sqrt(4));

// console.log(Math.sqrt(245));

// console.log(3 ** 4);

// console.log(2 ** 10);

// console.log(2 ** 2);


// console.log(Math.sqrt(-100));

// console.log(Math.sqrt(-11));

// let massiv = [4, 2, 5, 19, 13, 0, 10];
// let kublarYigindisi = 0;

// for (let i = 0; i < massiv.length; i++) {
//     kublarYigindisi += massiv[i] ** 3;
// }

// let natija = Math.sqrt(kublarYigindisi);
// console.log(natija);

// let m = [1,2,3,4,5,6,7,8,9,0];
// let kub = 0;

// for(let i = 0; i < m.length; i++){
//     kub += m[i] ** 3;
// }

// let n = Math.sqrt(kub);
// console.log(n);



// let Massiv = [4,-2,7,-5,0,-8,3];
// let manfiy_sonlar_soni = 0;
// for (let i = 0; i < massiv.length; i++){
//     if (Massiv[i] < 0){
//         manfiy_sonlar_soni++;
//     }
// }
// console.log("Manfiy sonlar soni:", manfiy_sonlar_soni);

// let MASSIV = [4, -2, 7, -5, 0, -8, 3];
// let yangiMassiv = MASSIV.filter(son => son > 0);
// console.log("Faqat ijobiy sonlar:", yangiMassiv);




// function getCurrentWeekdayInUzbek(){
//     const kunlar = [
//       "Yakshanba",
//       "Dushanba",
//       "Seshanba",
//       "Chorshanba",
//       "Payshanba",
//       "Juma",
//       "Shanba"
//     ];
//     const bugun = new Date();
//     const haftaKuni = bugun.getDay();
//     return kunlar[haftaKuni];
//   }
// console.log(getCurrentWeekdayInUzbek()); 

// function salomBer() {
//   console.log("Salom, dunyo!");
// }

// function salomIsmBilan(ism) {
//   console.log("Salom, " + ism + "!");
// }

// salomIsmBilan("Ali");

// // function kvadrat(son) {
// //   return son * son;
// // }

// // let natija = kvadrat(5);

// salomBer();
// salomBer("Olim");

// function tashqi() {
//   function ichki() {
//     console.log("Ichki funksiya");
//   }
//   ichki();
// }
// tashqi();

// function bajar(func) {
//   func();
// }

// bajar(() => {
//   console.log("Callback ishga tushdi");
// });

// setTimeout(function() {
//   console.log("Bu anonim funksiya");
// }, 1000);




// function raqamlarYigindisi(son){
//   let yigindi = 0;
//   let raqamlar = Math.abs(son).toString();
//   for (let i = 0; i < raqamlar.length; i++){
//     yigindi += parseInt(raqamlar[i]);
//   }
//   return yigindi;
// }
// console.log(raqamlarYigindisi(1234));
// console.log(raqamlarYigindisi(-567));



// // function royxatniToldir(){
// //   let massiv = ["Olma", "Banan", "Uzum"];
// //   for (let i = 0; i < massiv.length; i++){
// //     document.getElementById("royxat").innerHTML += "<li>" + massiv[i] + "</li>";
// //   }
// // }



// // Primitive:

// let x = 2
// x = 4
// // Number
// // -1, 0, 1, NaN
// // String
// "Hello JavaScript", 'Hello JavaScript', `Hello JavaScript`
// console.log(`Hello JavaScript`);
// // Boolean
// console.log(100 == 100);
// console.log(100 !== 100);
// // undefined
// let y
// console.log(y);
// let z = null
// console.log(z);

// // let m = 11;
// // m = 16;
// // console.log(m);

// `HELLO WORLD`
// console.log(`HELLO WORLD`);
// console.log(111 === 111);
// console.log(444 !== 444);
// let f
// console.log(f);
// let s = null
// console.log(s);



// // Massiv, Array
// let a = [4];
// a.push(`Shahobov_Developer`)
// a.unshift(`Assalomu_alaykum`);
// a.push(`TypeScript`);
// a.pop();
// a.shift();
// console.log(a);

// // Object

// let notebook = {}
// notebook.color = `black`
// notebook.price = `100$`
// notebook.cpu = `IntelR_CeleronR`
// notebook.width = `1366px`
// notebook.height = `768px`
// notebook.screen = `15.6`
// notebook.windows = `10`
// notebook.hz = `2.00`
// notebook.c_disk = `57.9 GB`
// notebook.e_disk = `259 GB`
// notebook.ram = `6 GB`
// notebook.cpu2 = `AMD A4 QUAD-CORE`
// console.log(notebook);




// let F = 5;
// let P = ((F) => 4 * F)(F);
// console.log("Perimetri:", P);

// let g = 5;
// let p = ((g) => 4 * g)(g);
// console.log("Perimetri:", P);

// // let r = 5;
// // let s = ((g) => g * g)(g);
// // console.log("Yuzasi:", s);

// // let a = 6;
// // let b = 4;

// // let S = ((a, b) => a * b)(a, b);
// // let P = ((a, b) => 2 * (a + b))(a, b);

// // console.log("Yuzasi:", S);
// // console.log("Perimetri:", P);


// // Function
// function plus(a, b) {
//     return a + b
// }
// console.log(plus(5, 8));
// console.log(plus(55, 8));
// console.log(plus(65, 18));
// console.log(plus(25, 8));




// console.log(minus(5, 8));
// console.log(minus(55, 8));
// console.log(minus(65, 18));
// console.log(minus(25, 8));

// // Oddiy function
// function minus(a, b) {
//     return a - b
// }

// console.log((function (a, b) {
//     return a + b
// })(5, 6));




// // let plus = (a, b) => {
// //     return a + b
// // }
// // console.log(plus(5, 6));

// const salom = (d, e) =>
// {
//     return d + e
// }
// console.log(salom(2, 4));


// function daraja(number, daraja) {
//     return number ** daraja
// }
// console.log(daraja(3, 2));

// function dara(number, daraja) {
//     if(!daraja){
//         daraja = 3
//     }
//     return number ** daraja
// }
// console.log(dara(4));

// function funksiya(num, da){
//     if(!da){
//         da = 11
//     }
//     return num ** da
// }
// console.log(funksiya(16));
// function funksiy(nu, d){
//     if(!d){
//         d = 11
//     }
//     return nu * d
// }
// console.log(funksiy(16));
// function funksi(n, d){
//     if(!d){
//         d = 11
//     }
//     return n / d
// }
// console.log(funksi(16));






// function da(number, daraja=2) {
//     return number ** daraja
// }
// console.log(da(3));

// function arg(...arg) {
//     return arg
// }
// console.log(arg(3, 2, 3, 4, 5, 6, 7));

// // let arr = [`a`, `b`, `c`]
// // arr.forEach(iterator)
// // function iterator (value) {
// //     console.log(value);
// // }




// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let num = Math.PI
// console.log(num);

// let num2 = 6 / 4;
// let Num = Math.abs(num2)
// console.log(Num);

// let NUM = Math.max(11, 16, 20);
// console.log(NUM);

// let number = Math.min(11, 16, 20);
// console.log(number);

// let str = `DVD`;
// let toPolindrom = str.split('').join('')
// if(str===toPolindrom){
//     console.log('Polindrom');
// }
// else{
//     console.log('Polindrom emas');
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.includes(4)
// console.log(arr2);
    true



// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.pop();
// console.log(arr2);
    10

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.push(11);
// console.log(arr2);
    11

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.push(11,12)
// console.log(arr2);
    12

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.splice(6);
// console.log(arr2);
    7, 8, 9, 10

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.slice(6);
// console.log(arr2);
    7, 8, 9, 10

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.reverse();
// console.log(arr2);
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.toString();
// console.log(arr2);
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = arr.concat(8);
// console.log(arr2);
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.map(x => x * 4);
// console.log(arr2);
    4, 8, 12, 16, 20, 24, 28, 32, 36, 0

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.filter(x => x % 2 == 0);
// console.log(arr2);
    2, 4, 6, 8, 0

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.map(x => x / 6);
// console.log(arr2);

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.at();
// console.log(arr2);
    1

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.at(4);
// console.log(arr2);
    5


// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.shift();
// console.log(arr2);
    1

// let arr = [1,2,3,4,5,6,7,8,9,0]
// let arr2 = arr.sort();
// console.log(arr2);
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// console.log(Math.pow(3, 4));
    81

// console.log(Math.pow(2, 10));
    1024

// console.log(Math.sqrt(4));
    2

// function birinchiNolHolati(chiziq){
//     return chiziq.indexOf('0');
// }
// const chiziq = "12310256";
// const result = birinchiNolHolati(chiziq);
// if(result !== -1){
//     console.log(`Birinchi nolning holati: ${result}`);
// }
// else{
//     console.log("Chiziqda nol mavjud emas.");
// }

// // #include <iostream>
// // #include <cmath>
// // using namespace std;

// // int main() {
// //     float n;
// // nishon:
// //     cout << "Natural son kiriting: ";
// //     cin >> n;
// //     if (ceil(n) != n || n <= 0)
// //         goto nishon;
// //     cout << "Natural son kiritildi." << endl;
// //     return 0;
// // }

// console.log(Math.sqrt(245));

// console.log(3 ** 4);

// console.log(2 ** 10);

// console.log(2 ** 2);


// console.log(Math.sqrt(-100));


// console.log(Math.sqrt(-11));

// let massiv = [4, 2, 5, 19, 13, 0, 10];
// let kublarYigindisi = 0;

// for (let i = 0; i < massiv.length; i++) {
//     kublarYigindisi += massiv[i] ** 3;
// }

// let natija = Math.sqrt(kublarYigindisi);
// console.log(natija);

// let m = [1,2,3,4,5,6,7,8,9,0];
// let kub = 0;

// for(let i = 0; i < m.length; i++){
//     kub += m[i] ** 3;
// }

// let n = Math.sqrt(kub);
// console.log(n);




// const ShahobovDb = 
// {
//     Viloyat:`Samarqand`,
//     Tuman:`Kattaqo'rg'on`,
//     Ism:`Shahobov`,
//     Malumoti:`O'zim ham bilmayman!`,
//     Noutbook:`Lenovo`,
//     Maktab:17,
//     Til:`O'zbek`,
//     Yosh:`Qisqasi, shu maktabni bitirmaganda xullas`,
//     Doc:`Shuncha narsa yetar, bo'ladi-da! To'g'ri-mi???`,
//     Doc:`Ha, to'g'ri yetadi!!! Bo'ladi!!! Boshqa yozib yotmang`,
//     Private:false
// }
// function javascript(){
//     if (!ShahobovDb.Private){
//         console.log(ShahobovDb);
//     }
//     else {
//         console.log(`Chiqmadi`);
//     }
// }
// javascript();

let str = `DVD`;
let toPolindrom = str.split('').join('')
if(str===toPolindrom){
    console.log('Polindrom');
}
else{
    console.log('Polindrom emas');
}
console.log(Math.sqrt(245));