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

//Potenciacion reto 1 Sesion 4

// let potencia = 1
// function power(base, exponent) {
//   for (let i = 0; i < exponent; i++) {
//     potencia = potencia * base
//   }
//   console.log(potencia);
// }
// console.log(power(3,3));

// //Numero Mayor Reto 2 Sesion 4

// function getLargerInt(number1, number2) {
//   if (number1>number2) {
//     console.log(`${number1} es mayor`);
//   }else{
//     console.log(`${number2} es mayor`);
//   }
// }
// console.log(getLargerInt(10,5));
// console.log(getLargerInt(10,15));

// // //Fibonacci Reto 3 Sesion 4
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

// //Reto 1

// let john = {
//   firstName: 'John',
//   lastName: 'Doe'
// }

// function deepEqual(a, b) {
//   const obj1Keys = Object.keys(a);
//   const obj2Keys = Object.keys(b);

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }
//   for (let objKey of obj1Keys) {
//     if (a[objKey] !== b[objKey]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log('Test 1:', deepEqual(1, 1)) // true
// console.log('Test 2:', deepEqual(1, '1')) // false
// console.log('Test 3:', deepEqual(john, john)) // true
// console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
// console.log('Test 5:', deepEqual(john, { firstName: 'John' })) //false

// //Reto 2

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function chunk(array, size) {
//   let newChunk = [];
//   for (let i = 0; i <= array.length; i = i+size)
//     newChunk.push(array.slice(i, i + size));
//   return newChunk;
// }

// console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
// console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
// console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

// //Reto 3

// function frequency(string) {
//   const abcObj = {}
//   for (const i in string) {
//     abcObj [string[i]] = (abcObj[string[i]] || 0 ) + 1;
//   }
//   return abcObj
// };
//  console.log('Test 1:', frequency('cccbbbaaa'))
//  // {a: 3, b: 3, c: 3}
//  console.log('Test 2:', frequency('www.bedu.org'))
//  // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
//  console.log('Test 3:', frequency('john.doe@domain.com'))
//  // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}

//  //Reto 1 Sesion 5
// //Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos.

//  var singers = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//   let newList = [];
//   for (let i = 0; i < list.length; ++i) {
//       newList.push(list[i][propertyName]);
//   }
//   return newList;
// }

// console.log( pluck(singers, 'name') );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

// console.log( pluck(singers, 'born') );
// // [1948, 1950, 1967, 1964]

// //Reto 2 Sesion 5
// //Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.

// function createPhoneNumber(numeros) {
//   let telefono = '(nn)nn-nn-nn-nn'
//   for (let numero of numeros) {
//     telefono = telefono.replace('n', numero)
//   }
//   return telefono
// }

//  console.log("Formato"+" "+"telefonico", createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"

//Reto 3 Sesion 5
// Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados.
// La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

// const numerosFaltantes = numeros => {
//   let faltantes = []
//   const numerosEnOrden = numeros.sort((a, b) => a - b)
//   for (let i = numerosEnOrden[0]; i < numerosEnOrden[numerosEnOrden.length - 1]; i++) {
//     if (numerosEnOrden.indexOf(i) < 0) {
//       faltantes.push(i);
//     }
//   }
//   return faltantes
// }

// console.log(numerosFaltantes([20, 10, 90, 50, 70, 30, 100]));  // [4, 6, 8]

/* //Reto 4 Sesion 5
//Hacer que la función mutable, utilice un nuevo array y no modifique mi array principal llamado "array1"
const array1 = ['Hello'];
const mutable = array => {
    let array2 = [...array]
    array2.push('World');
    return array2;
}
console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`); */

// //Reto 1 S6
// const Vec = function(x, y) {
//     this.x = x
//     this.y = y
//   };
//   Vec.prototype.plus = function(nuevoVec){
//     return new Vec (this.x + nuevoVec.x, this.y + nuevoVec.y)
//   };
//   Vec.prototype.minus = function(nuevoVec){
//     return new Vec (this.x - nuevoVec.x, this.y - nuevoVec.y)
//   };
//   Vec.prototype.length = function() {
//     return Math.sqrt(this.x **2 + this.y **2)
//   };
//   const vec1 = new Vec(1, 2);
//   const vec2 = new Vec(2, 3);

//   console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
//   console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
//   console.log(vec1.length()); // 2.23606797749979

//Reto 2 S6
//Crear un function constructor Group el cual crea una lista (arreglo) vacía.
// Agregar los siguientes métodos a Group:
// add: Agrega un nuevo valor al grupo solo si no existe.
// has: Retorna un booleano indicando si el valor es un miembro del grupo.
// from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.
// const Group = function () {
//   this.list = [];
// };
// Group.prototype.add = function (value) {
//   if (!this.has(value)) {
//     this.list.push(value);
//   }
// };
// Group.prototype.has = function (value) {
//   return this.list.includes(value);
// };
// Group.from = function (collection) {
//   const group = new Group();
//   collection.forEach((i) => {
//     group.add(collection[i - 1]);
//   });
//   return group;
// };

// const group = Group.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { list: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false

// group.add(10);
// console.log(group.has(10)); // true

//Reto 3 S6
//Crear un function constructor Triangle con tres parámetros a, b y c. Cada uno representa un lado del triángulo.
//Agregar el método getPerimeter al prototype de Triangle, el cual retorna el perímetro del triángulo.

// const Triangle = function (a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.getPerimeter = () => this.a + this.b + this.c
// };

// const triangle = new Triangle(1, 2, 3);

// console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
// console.log(triangle.getPerimeter()); // 6

// //Reto 1 S7
// //Crear una función flatten que recibe un arreglo de arreglos y
// //retorna un nuevo arreglo con todos los elementos del arreglo original.

// function flatten(arrays) {
//   return arrays.reduce(function (newArray, elements) {
//     return newArray.concat(elements); //.concat() - Se utiliza para unir 2 o mas arrays
//   }, []); //Valor inicial es un array vacio
// }

// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);
// console.log(array); // [1, 2, 3, 4, 5, 6]

// //Reto 2 S7
// //Crear una función compact que recibe un arreglo y
// //retorna un nuevo arreglo sin incluir los valores que sean falsy.

// function compact(array) {
//   return array.filter((e) => e); //El resultado de filter solo puede ser true o false,
//   //y solo agrega al array los que son true
// }
// const array = [0, 1, false, 2, "", 3];
// const compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

// //Reto 3 S7
// //Crear una función de alto orden loop que será similar a un for.
// //Recibe tres argumentos: start, una función test, una función update y una función body.
// //El ciclo empieza en start y termina cuando test retorne false.
// //En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
// //Al final de cada ciclo se ejecuta la función update.

// function loop(start, test, update, body) {
//   for (let i = start; test(i); i = update(i)) {
//     body(i);
//   }
// }

// const test = function (n) {
//   return n > 0;
// };

// const update = function (n) {
//   return n - 1;
// };

// loop(3, test, update, console.log);
// // 3
// // 2
// // 1

//Reto 4 S7 opcional

const estudiantes = [
  { nombre: "Pedro", calif: 5, grupo: "A" },
  { nombre: "Pablo", calif: 8, grupo: "B" },
  { nombre: "Alexis", calif: 2, grupo: "A" },
  { nombre: "Oscar", calif: 4, grupo: "C" },
  { nombre: "Arturo", calif: 7, grupo: "C" },
  { nombre: "Juan", calif: 5, grupo: "A" },
  { nombre: "José", calif: 6, grupo: "B" },
  { nombre: "Cesar", calif: 5, grupo: "A" },
  { nombre: "Rodolfo", calif: 7, grupo: "C" },
  { nombre: "Arturo", calif: 9, grupo: "C" },
  { nombre: "Diego", calif: 8, grupo: "A" },
  { nombre: "Esteban", calif: 6, grupo: "B" },
  { nombre: "Julio", calif: 6, grupo: "A" },
  { nombre: "Ciro", calif: 7, grupo: "C" },
];
let aprobadosPorGrupo = [];
let promedio;
function filtrarAlumnosAprobados(lista, grupoFiltro) {
  aprobadosPorGrupo = lista.filter(
    (elemento) => elemento.grupo === grupoFiltro && elemento.calif >= 6
  );
  promedio =
    aprobadosPorGrupo.reduce(
      (acumulado, elementoDe) => acumulado + elementoDe.calif, 0
    ) / aprobadosPorGrupo.length;
    aprobadosPorGrupo.push({
    Numero_de_aprobados: aprobadosPorGrupo.length,
    Promedio_de_aprobados: Math.floor(promedio),
  });
  return aprobadosPorGrupo;
}
const grupoA = filtrarAlumnosAprobados(estudiantes, "A");
const grupoB = filtrarAlumnosAprobados(estudiantes, "B");
const grupoC = filtrarAlumnosAprobados(estudiantes, "C");

console.log("Estudiantes grupo A aprobados", grupoA); // Estudiantes grupo A aprobados [ { nombre: 'Diego', calif: 8, grupo: 'A' }, ..., {Promedio: ** } ]
console.log("Estudiantes grupo B aprobados", grupoB); // Estudiantes grupo B aprobados [ { nombre: 'Pablo', calif: 8, grupo: 'B' }, ..., {Promedio: ** } ]
console.log("Estudiantes grupo C aprobados", grupoC); // Estudiantes grupo C aprobados [ { nombre: 'Arturo', calif: 7, grupo: 'C' }, ..., {Promedio: ** } ]
