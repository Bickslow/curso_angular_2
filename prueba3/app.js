var nombre = "Peter"; //Especificar que siempre va a ser de tipo string
var numero = 22;
var booleano;
var fecha = new Date();
fecha = new Date('2018-01-01');
var cualquiera; //puede recibir cualquier dato en cualuier momento
var objeto = {
    nombre: "Prueba",
    edad: 22
}; //Para modificar el objeto necesitará ser igual a un objeto exactemente igual
var texto = "Hola, " + nombre + " (" + numero + ")"; //Variable literal para concatenar textos.
//dentro de ${} se escribe código en javascript al igual que <script><script> en php, por ejemplo
function prueba(nombre, objeto, objeto2) {
    if (objeto === void 0) { objeto = "auxiliar"; }
    //la variable objeto es opcional. si est nula obtiene el valor "auxiliar"
}
prueba("nombre"); //el IDE me obliga a pasar un string como parámetro
var mifuncion = function (a) {
    return a;
};
var mifuncionF = function (a) { return a; };
var objetoConFuncion = {
    nombre: "Nombre",
    funcionCualquiera: function () {
        console.log("Nombre: " + this.nombre);
    },
    funcion2: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre); }, 1500);
    }
};
objetoConFuncion.funcionCualquiera();
var objetoDestructuracion = {
    nombreObjeto: "nombre",
    edad: "22"
};
var nombreObjeto = objetoDestructuracion.nombreObjeto, alias = objetoDestructuracion.edad;
console.log(nombre, alias);
var objetos = ["nombre1", "nombre2", "nombre3"];
var a = objetos[0], c = objetos[2];
console.log(a, c);
