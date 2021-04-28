//6.	Realizar un programa que lea N números, 
//calcule y escriba la suma de los pares y el 
//producto de los impares.


let pares=[];
let impares=[];
let sumapares=0;
let productoimpares=1;
let digitarnumero;

detener:


do {
	let listado=parseInt(prompt(`Desea ingresar numero?: \n1. Si \n2. No`));
    //listadonumeros.push(parseInt(digitarnumero));
   
  
		switch (listado)
        {
			case 1:
                numero=parseInt(prompt("Digite un numero:"));
                if(numero%2==0)
                {
                    sumapares = sumapares + numero;
                    pares.push(numero);
                }
                else
                {               
                    productoimpares = productoimpares * numero;
                    impares.push(numero);
                }
            
            break;
			case 2: 
                console.warn("suma de pares");            
                console.log(`lista de numeros pares: ` + pares + `  y la suma de los numeros pares: ${sumapares}` );
                console.warn("producto de impares");  
                console.log(`lista de numeros impares: ` + impares + ` el producto de los impares es: ${productoimpares}` );
            break detener;
         default:
            alert("opcion ingresada invalida o null");
                
                break;
        }
    }while(true)