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


// ! for 13;


// let a = 2;   
// let n = 4;   

// let S = 1;     
// let daraja = 1;
// console.log("a**0 = 1");

// for (let i = 1; i <= n; i++) {
//   daraja *= a;      
//   console.log("a**" + i + " =", daraja);
//   S += daraja;      
// }

// console.log("S =", S);



// ! for 14;


// let n = 5;
// let S = 0;
// let faktorial = 1; 

// for (let i = 1; i <= n; i++) {
//   faktorial *= i;  
//   S += faktorial;  
// }

// console.log("S =", S);


// ! for 15;


// let N = 4;  
// let K = 3;  
// let S = 0;

// for (let i = 1; i <= N; i++) {
//   let daraja = 1;

//   for (let j = 1; j <= K; j++) {
//     daraja *= i;
//   }
//   S += daraja;
// }

// console.log("S =", S);


// ! for 16;


// let N = 4;  
// let S = 0;

// for (let i = 1; i <= N; i++) {
//   let daraja = 1;
//   for (let j = 1; j <= i; j++) {
//     daraja *= i;
//   }
//   S += daraja;
// }

// console.log("S =", S);


// ! for 17;


// let A = 3;
// let B = 6;

// for (let i = A; i <= B; i++) {
//   let count = i + A - 1; 

//   for (let j = 0; j > count; j++) {
//     console.log(i);
//   }
// }


// ! for 18;


// let n = 36;  

// let count = 0;  
// let sum = 0;    
// let divisors = null; 

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     divisors.push(i);
//     count++;
//     sum += i;
//   }
// }

// console.log("Bo'luvchilar:", divisors.join(", "));
// console.log("Bo'luvchilar soni:", count);
// console.log("Bo'luvchilar yig'indisi:", sum);


// ! for 19;


// let n = 13;  

// let tub = true;

// for (let i = 2; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     tub = false; 
//     break;
//   }
// }

// if (tub) {
//   console.log(n + " soni tub son.");
// } else {
//   console.log(n + " soni tub emas.");
// }


// ! for 20;


// let N = 5;

// for (let i = 1; i <= N; i++) {
//   let satr = "";
//   for (let j = 1; j <= i; j++) {
//     satr += j + " ";
//   }
//   console.log(satr.trim());
// }


//! While 1


// let A = 17;
// let B = 4;

// let bo‘shQism = A;

// while (bo‘shQism >= B) {
//   bo‘shQism = bo‘shQism - B;
// }

// console.log("Bo'sh qism:", bo‘shQism);


//! While 2


// let A = 17;
// let B = 4;

// let count = 0;
// let temp = A;

// while (temp >= B) {
//   temp = temp - B;
//   count++;
// }

// console.log("Kesma necha marta sig‘adi:", count);


//! While 3


// let n = 27;  
// let temp = n;
// let natija = "3 - ning darajasi emas";

// if (n === 1) {
//   natija = "3 - ning darajasi"; 
// } else {
//   while (temp > 1) {
//     let k = 0;
//     while (temp >= 3) {
//       temp = temp - 3;
//       k++;
//     }

//     if (temp === 0) {
//       temp = k; 
//     } else {
//       break;
//     }
//   }
  
//   if (temp === 1) {
//     natija = "3 - ning darajasi";
//   }
// }

// console.log(natija);


//! While 4


// let n = 17; 
// let m = 4;

// let butunQism = 0;

// while (n >= m) {
//   n = n - m;
//   butunQism++;
// }

// let qoldiq = n;

// console.log("Butun qism:", butunQism);
// console.log("Qoldiq:", qoldiq);


//! While 5


// let n = 12345; 

// while (n > 0) {
//   let raqam = n % 10;
//   console.log(raqam);
//   n = Math.floor(n / 10);
// }


//! While 6


// let n = 54321; 

// let sum = 0;     
// let count = 0;    

// while (n > 0) {
//   let raqam = n % 10;
//   sum += raqam;
//   count++;
//   n = Math.floor(n / 10);
// }

// console.log("Raqamlar yig'indisi:", sum);
// console.log("Raqamlar soni:", count);


//! While 7


// let n = 57483; 

// let bor = false;

// while (n > 0) {
//   let raqam = n / 10;
//   if (raqam == 2) {
//     bor = true;
//   }
//   n = Math.floor(n / 10);
// }

// if (bor) {
//   console.log("2 raqami mavjud.");
// } else {
//   console.log("2 raqami mavjud emas.");
// }
