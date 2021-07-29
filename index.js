// const time = 25;
// let greeting;

// if (time < 12) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20 && time <= 24)  {
//   greeting = "Good evening";
// } else if (time > 24 ) {
//   greeting = "Not a valid time in this world xD"
// }
// console.log(greeting)



// const diametro = 1.4
// const grosor = 0.4
// let mensaje;

// if (diametro>=1.4 && grosor>=0.4) {
//     mensaje = "La rueda es para un vehículo grande";
// } else if (diametro>1.4 && grosor<0.4 ) {
//     mensaje = "La rueda es para un vehículo grande pero el grosor para esta rueda es inferior al recomendado";
// } else if(diametro<=1.4 && diametro>0.8 && grosor>=0.25 ) {
//     mensaje ="La rueda es para un vehículo mediano";
// } else if (diametro<=1.4 && diametro>0.8 && grosor<0.25){
//     mensaje = "La rueda es para un vehículo mediano pero el grosor para esta rueda es inferior al recomendado";
// } else if(diametro<0.8){
//     mensaje ="La rueda es para un vehículo pequeño";
// }
// console.log(mensaje)



// for (let i = 0; i<=100; i++) {  
//     if (i % 2 === 0){
//         console.log(`${i} Es par`);
//     }else if (i%2 !== 0){
//         console.log(`${i} Es impar`);
//     }
// }



// console.log("2 es primo")
// console.log("3 es primo")
// console.log("5 es primo")
// console.log("7 es primo")
// console.log("11 es primo")
// for (let contador = 2; contador <= 100; contador++) {
//     for (let i = 2; i<=contador ; i++) {
//         if (i%1===0 && i%contador===0 && i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0 && i%11!==0 ) {
//             console.log(`${i} es primo`)
//         }
//     }
// }


//Doble de un array

// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
// const doubled = []

// for (let i = 0; i < numbers.length; i++) {
//     doubled.push (numbers[i]*2); 
// }
// console.log(numbers);
// console.log(doubled);


//Promedio de un array con ciclo for

// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
// let suma = 0

// for (let i = 0; i < numbers.length; i++) {
//     number = numbers[i]
//     suma = suma + number //o suma += number
// }
// console.log(suma);

// let promedio = suma / numbers.length
// console.log(promedio);


//Promedio de un array con un ciclo for ...of

// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
// let suma = 0

// for (const number of numbers) {
//   suma = suma + number
// }
// console.log(suma);

// let promedio = suma / numbers.length
// console.log(promedio);


//Promedio de un array con un ciclo for ...each

// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
// let suma = 0

// numbers.forEach(number => {
//   suma = suma + number
// });
// console.log(suma);

// let promedio = suma / numbers.length
// console.log(promedio);


// Convertir un array en un objeto con for ...each


// const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
// const carInObj = {}

// car.forEach(keyAndValue => {
//   carInObj [keyAndValue[0]] = keyAndValue[1]
// });
// console.log(carInObj);



//Extraer las URLs de facebook e instagram y renombrar las variables por fb e ig respectivamente.


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   links: {
//     web: {
//       blog: 'https://johndoe.com'
//     }, 
//     social: {
//       facebook: 'https://facebook.com/john.doe',
//       instagram: 'https://instagram.com/john.doe'
//     } 
//   }
// }
// Desestructuracion de objetos anidados
// const {links:{social:{facebook:fb, instagram:ig}}} = person;

// const {
//   links:{ 
//     social:{ 
//       facebook:fb, instagram:ig 
//     }
//   }
// } = person;

// console.log(fb);
// console.log(ig);



//Unir el array 1, 2 y 3, para después sumar todos los números que sean primos 

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const calificaciones = {
//     array3:[11, 12, 13, 14, 15]
// };

// const {array3} = calificaciones

// const lista = [...array1, ...array2, ...array3]
// let listaPrimos = []
// let suma = 0

// console.log(lista);

// for (let counter = 2; counter <= lista.length; counter++) {
//   let isPrime = true;

//   for (let i = 2; i <= counter; i++) {
//     if (counter % i === 0 && i !== counter) {
//       isPrime = false;
//     }
//   }

//   if(isPrime) listaPrimos.push(counter)
// }

// console.log(listaPrimos);


// listaPrimos.forEach(listaPrimos => {
//   suma = suma + listaPrimos
// });
// console.log(`Resultado ${suma}`);

//Potenciacion reto 1

// let potencia = 1
// function power(base, exponent) {
//   for (let i = 0; i < exponent; i++) {
//     potencia = potencia * base
//   }
//   console.log(potencia);
// }
// console.log(power(3,3));


// //Numero Mayor Reto 2

// function getLargerInt(number1, number2) {
//   if (number1>number2) {
//     console.log(`${number1} es mayor`);
//   }else{
//     console.log(`${number2} es mayor`);
//   }
// }
// console.log(getLargerInt(10,5));
// console.log(getLargerInt(10,15));

// // //Fibonacci Reto 3
// let n1 = 0
// let n2 = 1
// let resultado = n1 + n2

// function fibonacci(limit) {
//    for (let i = 1; i < limit; i++) {
//    console.log(resultado);
//    n1 = n2
//    n2 = resultado
//    resultado = n1 + n2
//   }
// }
// console.log(0);
// console.log(1);
// console.log(fibonacci(6));

//Postwork Sesion 4

//Reto 1

let john = {
  firstName: 'John',
  lastName: 'Doe'
}

function deepEqual(a, b) {
  const obj1Keys = Object.keys(a);
  const obj2Keys = Object.keys(b);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let objKey of obj1Keys) {
    if (a[objKey] !== b[objKey]) {
      return false;
    }
  }
  return true;
};

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) //false

//Reto 2

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function chunk(array, size) {
  let newChunk = []; 
  for (let i = 0; i <= array.length; i = i+size) 
    newChunk.push(array.slice(i, i + size));  
  return newChunk;
}

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Reto 3
function frequency(string) {
  const abcObj = {}
  for (const i in string) {
    abcObj [string[i]] = (abcObj[string[i]] || 0 ) + 1; 
  }
  return abcObj
};
 console.log('Test 1:', frequency('cccbbbaaa'))
 // {a: 3, b: 3, c: 3}
 console.log('Test 2:', frequency('www.bedu.org'))
 // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
 console.log('Test 3:', frequency('john.doe@domain.com'))
 // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4} 
