//variables para la ejecucion
let username
let password
let intentos = 1
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
            let producto
                producto = parseInt(prompt("ingrese el valor del producto $"));
                if (producto !== Number) {
                


                inventario--
                }else {
                console.log("incorrect data, try again")
                }
            registros= parseInt(prompt("do you want to registrate a new product?\n press 1 to registrate\n press 2 for exit"))
        }
    } else {
    intentos++}

}while (intentos!==maxIntentos);


console.log("Restart the sistem again")
