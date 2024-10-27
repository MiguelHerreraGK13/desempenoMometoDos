//variables para la ejecucion
let username
let password
let intentos = 0
const maxIntentos = 3
let registros
let inventario=100

//autenticacion

do {
        username = prompt('please get in your userName')
        password = prompt("please get in your password")

        if (username === "admin" && password === "1234") {
            registros = 1
            while (registros == 1) {
            let producto=0
                producto = (prompt("Enter the product value $"));
                producto=parseFloat(producto)
                if (isNaN(producto)) {
                    console.log("the value is not a number, try again");
                }else {
                


                inventario--
                }
            registros= parseInt(prompt("do you want to registrate a new product?\n press 1 to registrate\n press 2 for exit"))
        }
    } else {
    intentos++}

}while (intentos!==maxIntentos);


console.log("Restart the sistem again")
