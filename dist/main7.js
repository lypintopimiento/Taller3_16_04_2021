// 7.Dados dos números enteros positivos N y D,
// se dice que D es un divisor de N si el resto de
// dividir N entre D es 0. Se dice que un número N 
// es perfecto si la suma de sus divisores
// (excluido el propio N) es N. Por ejemplo 28 es perfecto, 
// pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14
// y su suma es 1+2+4+7+14=28. Hacer un organigrama que dado 
// un número N nos diga si es o no perfecto.

let N = parseInt(prompt("Ingrese un numero"));
let D = 1;
let resultado = 0;
let lista =  [];

do{
    if (N%D==0)
    {
        resultado=resultado+D;
        lista.push(D);
    }
    D++;
    if (D<N)
     {
        continue;
     }
     else{
         if (resultado==N)
         {
             console.log(`El numero ${N} es perfecto y la suma de sus divisores es ${resultado} lista: `,lista);
         }
         else{
            console.log(`El numero ${N} no es perfecto y la suma de sus divisores es ${resultado} lista: `,lista);
         }
         break;
     }
} while (true)

