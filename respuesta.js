////////primer punto

console.log("Hola, mundo!");

/////////segundo punto 

let a = 10;
let b = 5;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

////////tercer punto 

function sumar(x, y) {
    return x + y;
}
console.log("Suma de 5 + 7:", sumar(5, 7));

//// cuarto punto 

let esVerdad = true;
if (esVerdad) {
    console.log("La variable es verdadera.");
} else {
    console.log("La variable es falsa.");
}


//// quinto punto 

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
colores.forEach(color => console.log(color));

////// Sexto punto

function cuadrado(num) {
    return num * num;
}
console.log("Cuadrado de 4:", cuadrado(4));

////// septimo punto

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(persona);


///// octavo punto 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

///// noveno punto 

function concatenar(str1, str2) {
    return str1 + str2;
}
console.log(concatenar("Hola, ", "mundo!"));


//// decimo punto 

let numeros = [1, 2, 3, 4, 5];
let suma = 0;
numeros.forEach(num => suma += num);
console.log("Suma de los números:", suma);


/// punto once

let numero = -5;
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}


////// punto doce

function sumarArray(numeros) {
    let suma = 0;
    numeros.forEach(num => suma += num);
    return suma;
}
console.log("Suma del array:", sumarArray([1, 2, 3, 4, 5]));


//// punto trece 

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


///// punto catorce

function longitudCadena(texto) {
    return texto.length;
}
console.log("Longitud de 'Hola':", longitudCadena("Hola"));


/// punto quince 

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

///// punto dieciseis 

let inicio = 5;
let fin = 10;
for (let i = inicio; i <= fin; i++) {
    console.log(i);
}

///// punto diesiciete 

function invertirCadena(texto) {
    return texto.split("").reverse().join("");
}
console.log("Cadena invertida:", invertirCadena("Hola"));


//// punto diesiocho 

for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

////punto diesinueve 

function esPalindromo(palabra) {
    let invertida = palabra.split("").reverse().join("");
    return palabra === invertida;
}
console.log("¿'radar' es palíndromo?", esPalindromo("radar"));


///// punto veinte 

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//// 21

function suma(a, b) {
    return a + b;
}

/////// 22

function resta(a, b) {
    return a - b;
}


///// 23

function multiplica(a, b) {
    return a * b;
}


//// 24

function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}


///// 25

function longitudCadena(texto) {
    return texto.length;
}


//// 26

function esPar(num) {
    return num % 2 === 0;
}


////// 27

function esPalindromo(texto) {
    return texto === texto.split("").reverse().join("");
}


//// 28

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

////// 29 

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


///// 30

function maximoComunDivisor(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


///// 31

function generarContrasena(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }
    return contrasena;
}


////// 32

function raizCuadradaSuma(a, b) {
    return Math.sqrt(suma(a, b));
}

///// 33

function areaTriangulo(base, altura) {
    return multiplica(base, altura) / 2;
}

/////// 34

function convertirTemperatura(valor, escala) {
    if (escala === "C") return celsiusAFahrenheit(valor);
    else if (escala === "F") return (valor - 32) * 5/9;
    else return "Escala no válida";
}


////// 35

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function siguientePrimo(num) {
    let siguiente = num + 1;
    while (!esPrimo(siguiente)) {
        siguiente++;
    }
    return siguiente;
}

//////// 36 

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}


////// 37

function invertirNumeros(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}


///// 38 

function esNumeroPerfecto(num) {
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }
    return suma === num;
}

let encontrados = 0;
let num = 1;
while (encontrados < 5) {
    if (esNumeroPerfecto(num)) {
        console.log(num);
        encontrados++;
    }
    num++;
}


///// 39

function concatenarPalabras(palabras) {
    return palabras.join(" ");
}


//// 40

function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b);
}