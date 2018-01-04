
// Uso de Let y Const
/*var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};*/

let nombreTS:string ="Ricardo Tapia";
let edadTS:number =23;

const PERSONAJETS: {nombre:string, edad:number} = {
  nombre: nombreTS,
  edad: edadTS
};

console.log(PERSONAJETS);

// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

//RESPUESTA
interface Hero{
  nombre:string,
  artesMarciales:string[]
}

let batman2:Hero = batman;
console.log(batman2);

// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2
}*/
//RESPUESTA
 let funcion = (a:number, b:number)=>(a+b)*2;
 console.log(funcion(2,5));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
/*function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};*/

function getAvenger2 (nombre:string, poder?:string, arma:string = "auxiliar"){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + arma
  }
  console.log(mensaje);
}

getAvenger2("hola");
getAvenger2("hola","adios");
getAvenger2("hola","adios","sgsg");


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo{
  base:number;
  altura:number;
  area:Function = ()=>{
    return this.base*this.altura;
  }
  area2():number{
    return this.base*this.altura;
  }
  constructor (base:number,altura:number){
    this.base = base;
    this.altura = altura;
  }
}

console.log(new Rectangulo(2,5).area());
