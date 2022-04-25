let contador = 1

while (contador <=10) {
    console.log (contador)
    contador++
}

/*este contador tiene como funcion itirar un bucle*/

/*VARIABLE QUE MAS SE USA - ej poner numeros divisores de dos*/

/*for(let contador=1; contador<=100; contador++) {
    if(contador%2 == 0){
    console.log(contador)   
    }
}*/

//IMPORTANTE APRENDER A ITERAR PARA ATRAS

let texto = "soy un texto"

// length funcion que te dice el tamaño de algo
let tamanio = texto.length

console.log (tamanio)

//i se usa como valor para iterar
//esta funcion solo print letras o

for (let i=0; i<texto.length; i++){
    if (texto [i] == 'o' || (texto [i] == 'O')) {
        console.log(texto[i])
    }
}
//CHEQUEAR SI ESTA BIEN LA DE O O 

for (let i=texto.length; i>=0; i--) {
    console.log(texto[i])
}
 

//PREGUNTA - EL ORDEN DE LAS FUNCIONES, AFECTA AL RENDIMIENTO? POR EJ SI DECIDO PONER EL i-- AL INICIO? MOFIDICA LA FUNCION?

///FUNCIONES
function saludar () {
    console.log ("Hola como andas")
}

function tomarCerveza (marca = " quilmes") {
    console.log ("Tomar Cerveza" + marca)
}

/////////////////////////////////
/////////MAIN
//llamar funciones
saludar()
tomarCerveza (" Heineken")
tomarCerveza (" Stout")
//revisar relacion marca como funciona
tomarCerveza ()
saludar()

/*function multiplicar (num1,num2) {
    let resultado =num1*num2
    console.log(resultado)
}

multiplicar (3,4)*/

function multiplicar (num1,num2) {
    let resultado =num1*num2
    return resultado
}

//scop alcance de la variable, hay variables afuera o adentro
let multi = multiplicar (3,4)
console.log= (multi)

/* EJEMPLO DE FER
function multiplicar (num1,num2) {
    return num1*num2
} 
let resultado = multiplicar (3,4)
console.log= (resultado)*/


function convertir (dinero,cotiz) {
    let dolares = dinero/cotiz
    return dolares
}

function poderCompra (ahorro) {
    if (ahorro>50000) {
        console.log ("comprar casita")
    }else if (ahorro>10000) {
        console.log= "compro auto"
    }else {
        console.log="seguir ahorrando"
    }
}

//////////////////////MAIN//////CUANTO TENGO EN DOLARES Y QUE ME PUEDO COMPRAR

let ahorroPesos = parseFloat (prompt ("cuantos pesos tenes?"))
let ahorroDolares = convertir(ahorroPesos,200)
poderCompra (ahorroDolares)

////no podriamos usar directamente ahorroDolares como poder compra? por que?
