//2.Realice un programa que calcule el
// máximo de N números leídos desde teclado.

let listadonumeros=[];
let digitarnumero;
let listado;
do {
	listado=parseInt(prompt(`Desea ingresar numero?: \n1. Si \n2. No`));
		switch (listado) {
			case 1:
				digitarnumero=parseInt(prompt("Digite un numero:"));
				listadonumeros.push(parseInt(digitarnumero));
				console.log(parseInt(digitarnumero));
				break;

			case 2: 
				function validarnumeromayor(a, b) {
		  return a - b;
		}
		listadonumeros = listadonumeros.sort(validarnumeromayor);
				let numeromaximo = parseInt(listadonumeros.length-1);

        		
				alert(`Listado de numeros ordenados: ${listadonumeros}`);
				alert(`El numero mayor del listado es: ${listadonumeros[numeromaximo]}`);
		break;
		default:
		break;
		}	
		}
	
	while (listado==1);
	
	
	