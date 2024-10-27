//variables para la ejecucion
let username
let password
let intentos = 0
const maxIntentos = 3
let registros
let inventario=100
let ganancia
let gananciaTotal=0

//autenticacion

do {
        username = prompt('please enter your userName')
        password = prompt("please enter your password")

        if (username === "admin" && password === "1234") {
//registros            
            registros= prompt("press 1 for enter first product")
            if (registros==1) {
                while (registros == 1) {
                let producto=0
                    producto = (prompt("Enter the product value $"));
                    producto=parseFloat(producto)
                    if (isNaN(producto)) {
                        console.log("the value is not a number, try again");
                    }else {
                    if (producto<10000) {
                        ganancia=producto*0.05
                        
                    } else if (producto>=10000 && producto<50000) {
                        ganancia=producto*0.10
                        }else{
                        ganancia=producto*0.15
                        }
                    inventario--
                    gananciaTotal+=ganancia;
                    console.log("Current gains is "+ganancia);
                    console.log("Total gains is "+gananciaTotal);
                    console.log("Current inventory is "+inventario);
                    }
                registros= parseInt(prompt("do you want to registrate a new product?\n press 1 to registrate\n press 2 for exit"))
                }
            }
    } else {
    intentos++}

}while (intentos!==maxIntentos); //fin autenticacion
if (intentos==maxIntentos) {
    console.log("you must to restart the sistem")    
}

