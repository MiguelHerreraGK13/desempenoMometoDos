// console.log(5+'5');
// console.log(('2'+'2'-'2'));
// console.log(5 + '5');
// let x = typeof(42)
// console.log(typeof x);
// let y
// console.log( y = 2 * (3 + 5));

// let a = 5; let b = '5'; console.log(a === b)

//let i = 0; while (i < 3) {console.log(i);   i++;}

//i = 10; do {   console.log(i);   i--; } while (i > 7);
// let i
// for (let i = 0; i <= 10; i++) 
//     { if (i==5) {
//         break
//     }
//     console.log(i);   
// } 

// for (let i = 0; i <= 10; i++) 
        
//     { 
//         console.log(i);
//         if (i==5) {
//         break;
//     }
       
// }

// function sumar(a,b) {return a+b;}
// function duplicar(n) {return n*2}

// console.log(duplicar(sumar(2,3)));


// function triple(n) {
//     return n*3    
//     }
// function cuadrado(n) {
//     return n*n
//     }

// function calcular(a) {
    
//     }

// console.log(calcular());


// Inicio de sesión con máximo de 3 intentos
let username;
let password;
let intentos = 0;
const maxIntentos = 3;

while (intentos < maxIntentos) {
    username = prompt("Por favor, ingrese su nombre de usuario:");
    password = prompt("Por favor, ingrese su contraseña:");

    if (username === "admin" && password === "1234") {
        let continuar = true;

        while (continuar) {
            let precioVenta = prompt("Ingrese el precio de venta del producto:");
            precioVenta = parseFloat(precioVenta); // Convertimos el input a un número

            let ganancia;
            
            if (precioVenta < 10000) {
                ganancia = precioVenta * 0.05;
            } else if (precioVenta >= 10000 && precioVenta <= 50000) {
                ganancia = precioVenta * 0.10;
            } else {
                ganancia = precioVenta * 0.15;
            }
            
            console.log(`Precio de venta: $${precioVenta}, Ganancia: $${ganancia}`);

            // Preguntar al usuario si quiere seguir ingresando productos
            let respuesta = prompt("¿Desea ingresar otro producto? (sí/no):");
            continuar = (respuesta.toLowerCase() === 'sí');
        }

        break; // Salir del bucle de intentos si el inicio de sesión es exitoso
    } else {
        intentos++;
        console.log(`Intento ${intentos} de ${maxIntentos} fallido. Intente de nuevo.`);
    }

    if (intentos === maxIntentos) {
        console.log("Número máximo de intentos alcanzado. Sistema cerrado.");
    }
}

