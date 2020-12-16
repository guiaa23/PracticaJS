//ejercicio 1
alert("Un mensaje");

//ejercicio 2
document.write("Hello World");

//ejercicio 3 (concatenando)
let numero1 = 3
let numero2 = 5
document.write("<br>" + (numero1 + numero2));

//ejercicio 4

let usuario = prompt("Nombre de usuario");
document.write("<br>" + usuario);

//ejercicio 5
let numeroA = parseInt(prompt("Ingrese numero para sumar"));
let numeroB = parseInt(prompt("Ingrese un segundo numero para sumarle al primero"));
document.write("<br>Resultado suma: " + (numeroA + numeroB));

//ejercicio 6
let numero3 = prompt("Ingrese numero");
let numero4 = prompt("Ingrese un segundo numero");

if (numero3 > numero4) {
    document.write("<br>Numero mayor: " + numero3);
} else {
    document.write("<br>Numero mayor: " + numero4)
}

//ejercicio 7
let numero5 = prompt("Ahora debe ingresar tres numeros: Ingrese el primero");
let numero6 = prompt("Ingrese un segundo numero");
let numero7 = prompt("Ingrese un tercer numero");

if (numero5 > numero6 && numero7) {
    document.write("<br>" + numero5);
}
if (numero6 > numero5 && numero7) {
    document.write("<br>" + numero6);
}
if (numero7 > numero5 && numero6) {
    document.write("<br>" + numero7);
}

//ejercicio 8

let numero8 = parseInt(prompt("Ingrese un numero cualquiera para dividir en 2"));

if (numero8 % 2 == 0) {
    document.write("<br>El numero " + numero8 + " es divisible en 2");
} else { document.write("<br>El numero " + numero8 + " no es divisible en 2") };

//ejercicio 9

let str = prompt("Ingrese frase")
let res = (0, 1)