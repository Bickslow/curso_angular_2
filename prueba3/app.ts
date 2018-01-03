let nombre:string = "Peter"; //Especificar que siempre va a ser de tipo string
let numero:number = 22;
let booleano:boolean;
let fecha:Date = new Date();
fecha = new Date('2018-01-01');
let cualquiera:any; //puede recibir cualquier dato en cualuier momento
let objeto = {
  nombre: "Prueba",
  edad: 22
}//Para modificar el objeto necesitará ser igual a un objeto exactemente igual

let texto = `Hola, ${nombre} (${numero})`; //Variable literal para concatenar textos.
//dentro de ${} se escribe código en javascript al igual que <script><script> en php, por ejemplo

function prueba (nombre:string, objeto:string = "auxiliar", objeto2?:string){
    //la variable objeto es opcional. si est nula obtiene el valor "auxiliar"
}

prueba("nombre"); //el IDE me obliga a pasar un string como parámetro


let mifuncion = function (a:any) {
  return a;
}

let mifuncionF = (a:any) => a;


let objetoConFuncion = {
  nombre: "Nombre",
  funcionCualquiera(){
    console.log("Nombre: " + this.nombre);
  },
  funcion2(){
    setTimeout(()=>console.log(this.nombre),1500);
  }
}

objetoConFuncion.funcionCualquiera();




let objetoDestructuracion ={
  nombreObjeto:"nombre",
  edad: "22"
}


let {nombreObjeto, edad:alias} = objetoDestructuracion;

console.log(nombre,alias);


let objetos:string[] = ["nombre1","nombre2","nombre3"];

let [a,/*b*/,c] = objetos;

console.log(a,c);
