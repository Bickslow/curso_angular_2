var variableNormal = "hola1";
let variable = "hola2";


if (true){
  //la varible let se crea internamente dentro del if y deja de existir al terminar
  var variableNormal = "adios1";
  let variable = "adios2";
}


console.log(variableNormal + " " + variable);


const VARIABLE = "123"; //Se trata de una variable únicamente de lectura.
