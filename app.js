document.write("<h1> Hola javaScript </>")

//array

let arrayNombres=["Ana", "Carlos", "Felipe", "Juan"]

let objetoDatos={
    nombre:"Ana",
    carrera:"Informática",
    año:2025,
    notas:[6.7, 6.9, 5.5]
}

console.log(arrayNombres)
console.log(objetoDatos)

// comentarios de una linea
/* comentarios de un bloque
// operadores relacionales
/*
>
<
<=
>=
==
!=
===  estrictamente iguales
*/

let uno=1
let uno_string="1"

console.log(uno==uno_string)
console.log(uno===uno_string)

// Estructuras de control 

if(uno==uno_string)
    console.log("Son iguales? ")

if(uno===uno_string)
    console.log("Son iguales iguales")
else
    console.log("no son iguales")

    let tipoAlumno="diurno"
    switch(tipoAlumno){

        case 'diurno':
            console.log("Es un alumno de día ")
        case 'vespertino':
            console.log("Es un alumno de noche")
        default:
            console.log("No es estudiante")

    }

//Ciclos while y for

//mostrar los 10 primeros numeros positivos


let cont=0

while(cont<10){
    console.log(cont)
    cont++
}

//Ciclo For

for(let i=0;i<10;i++){
    console.log(i)

}


let num=[4,23,44,12,56,21,3,14,18,8,5]
let contP=0
//Muestre la cantidad de numeros pares del array num
function comprobarNumerosPares(num) {
    let pares = [];
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 === 0) {
        pares.push(num[i]);
        contP++
      }
    }
    return pares;
  }
  
  // Ejemplo de uso:
  let numerosPares = comprobarNumerosPares(num);
  console.log(numerosPares, contP); // Output: [2, 4, 6, 8, 10]



//Cree un programa que muestre la cantidad de pares e impares 
//del arreglo num, utilizando una funcion que retorne si el numero 
//que esta en el arreglo es par o impar

let i = 0;
let y = 0;

function contador(lista) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] % 2 === 0) {
            console.log("El número " + lista[j] + " es par");
            i++;
        } else {
            console.log("El número " + lista[j] + " es impar");
            y++;
        }
    }
    console.log("La cantidad de números pares es: " + i);
    console.log("La cantidad de números impares es: " + y);
}

contador(num);
