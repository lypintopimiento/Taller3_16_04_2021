//4.	Realizar un programa de procesos 
//en el que se almacenen 3 números en 3 variables A, B y C. 
//El diagrama debe decidir cual es el mayor y cual es el menor

numeromayor=0;
numerointermedio=0;
numeromenor=0;

let A=parseInt(prompt("Ingrese un numero:"));
let B=parseInt(prompt("Ingrese un numero:"));
let C=parseInt(prompt("Ingrese un numero:"));

if (A>B && A>C ){
     numeromayor= A;
if(B>C){
        
numerointermedio = B;
numeromenor = C;
    }else{
        
       numerointermedio = B;
       numeromenor= C;
    }
          
}


if(B>A && B>C){
    numeromayor= B;
    if(A>C){
            
    numerointermedio = A;
    numeromenor = C;
        }else{
        
        numerointermedio = C;
        numeromenor = A;
    }
         
    
}

if(C>A && C>B){
    numeromayor=C;
    if(B>A){
    numerointermedio = B;
    numeromenor = A;
        }else{
            numerointermedio = A;
            numeromenor = B;
        }
            
          
    
}
console.log(`Los numeros ingresados son: ${A} ,${B} ,${C} `)
console.log(`El numero Mayor es: ${numeromayor} `)
console.log(`El numero menor es: ${numeromenor}`)