//1.	Realizar un programa que permita leer 2 números 
//diferentes y nos diga cual es el mayor de los 2 números.

let num1 = parseInt(prompt("Ingrese por favor un número"))
let num2 = parseInt(prompt("Ingrese por favor otro diferente"))
console.log(`Los numeros Ingresados son: ${num1} , ${num2}`);

if(num1 > num2){
    console.log(`El numero ${num1} es el mayor`);
}else{
    console.log(`El numero ${num2} es el mayor`);
}