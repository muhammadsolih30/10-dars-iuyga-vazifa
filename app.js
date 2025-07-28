// let a = 1;
// let b = 15;
// let natija = 0

// for(let i = 1; i <= b; i++){
//    natija++
//    console.log(natija)
// }

// ! for 2

// let a = 4;
// let b = 15;
// let natija = b;

// if (a > b) {
//    console.log("a < b")
// }
// else{
//     for (let i = b -1; i > a; i--) {
//     natija++;
//     console.log(i)
//    }
//    console.log("oxirgi natija bu yani nacha martada chiqqani",natija);
// }



// ! for 3



// let narx = 10000;
// let i;
// let pul = 0;

// for (let i = 1; i <= 10; i++) {
//   pul += narx;
//   console.log(`${i} kg shokolad ${pul} ming`);
// }

// ! for 4

// let narx = 10000;

// for (let kg = 0.2; kg <= 2.0 ;kg += 0.2){
//    let umumiyNarx = (narx * kg).toFixed(2);
//    console.log(`${kg.toFixed(1)} kilogram konfir narxi ${umumiyNarx} sum`)
// }



// ! for 5;


// let a = 1;
// let b = 5;
// let sum = 0;

// for (let i = a; i < b; i++) {
//   sum += i;
//   console.log(sum);
// }


// ! for 6;


// let a = 1;
// let b = 10;
// let c = a;

// for (let i = a; i <= b; i++){
//    c *= i
// }
// console.log(`a dan b gacha bolgan sonlar kopaytmasi: ${c}`)




// ! for 7;


// let a = 1;
// let b = 5;
// let c = a

// for (let i = a; a <= b; i++){
//    c *= c;
//    console.log(c)
// }



// ! for 8;

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// if (n > 0) {
//   let S = 0;
//   for (let i = 1; i <= n; i++) {
//     S += 1 / i;
//   }
//   console.log("Yig'indi S =", S);
// } else {
//   console.log("n musbat butun son bo'lishi kerak.");
// }


// ! for 9;

// let n = parseFloat(prompt("n ni kiriting (n > 0):"));

// if (n > 0) {
//   let S = 1;
//   for (let i = 1.1; i <= n + 0.0001; i += 0.1) {
//     S *= i;
//   }
//   console.log("Ko'paytma S =", S);
// } else {
//   console.log("n musbat son bo'lishi kerak.");
// }


// ! for 9;


// let n = 5; 
// let S = 1;

// for (let i = 1; i <= n; i++) {
//   S *= (1 + i / 10);
// }

// console.log("Natija S =", S.toFixed(5));



// ! for 10;


// let n = 5; 
// let sum = 0;

// for (let i = 1; i <= 2 * n - 1; i += 2) {
//   sum += i;
// }

// console.log("n**2 =", sum);



// ! for 11;


// let a = 2.5; 
// let n = 3;   
// let natija = 1;

// for (let i = 1; i <= n; i++) {
//   natija *= a;
// }

// console.log("a ** n =", natija);



// ! for 12;


// let a = 2; 
// let n = 5; 
// let natija = 1;

// for (let i = 1; i <= n; i++) {
//   natija *= a;
//   console.log("a^" + i + " =", natija);
// }




