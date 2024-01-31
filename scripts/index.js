// Esta clase Activity sirve como un "molde" para crear objetos de actividad. Cuando se crea una nueva instancia de Activity, se espera que se le pase un objeto act con propiedades como id, actividad, descripcion, y url. La instancia de Activity entonces tiene estas propiedades y puede utilizarse para representar y manipular información sobre una actividad específica.
class Activity {
    constructor(act) {
        console.log(act.id)
        this.id = act.id;
        this.actividad = act.actividad;
        this.descripcion = act.descripcion;
        this.url = act.url;
    }
}

//En resumen, la clase Contenedor permite gestionar un conjunto de actividades. Puedes agregar actividades, obtener la lista de todas las actividades almacenadas y eliminar actividades según su id. La clase trabaja en conjunto con la clase Activity para representar y manipular información sobre actividades.
class Contenedor {
    //El constructor de la clase inicializa las propiedades actividades e id. actividades es un array vacío que se utilizará para almacenar instancias de la clase Activity. id se inicializa en 0 y se utiliza para asignar identificadores únicos a cada actividad.
    constructor () {
        this.actividades = [];
        this.id = 0;
    }
    // Este método devuelve el array actividades, que contiene todas las instancias de actividades almacenadas en el contenedor.
    getAllActivities () {
    return this.actividades
    }
    //Este método crea una nueva instancia de Activity utilizando el objeto activ proporcionado como argumento. Se incrementa el id en 1 para asignar un identificador único a la nueva actividad. La actividad se agrega al array actividades.
    createActivity (activ) {
        this.id++;
        const activity = new Activity ({id: this.id, ...activ})
    this.actividades.push(activity);
    }

    //Este método elimina una actividad del array actividades según el id proporcionado. Utiliza el método filter para crear un nuevo array que excluye la actividad con el id dado.
    deleteActivity (id) {
        this.actividades =this.actividades.filter((act)  => act.id !== id) 
    }

}

//PRUEBAS
const contenedor = new Contenedor ();

const actividad0 = {actividad:'Ciclsimo',descripcion:'Salimos en bici hasta Dapa',url:'https//www.ciclas.com'}
const actividad1 = {actividad:'Natacion',descripcion:'Nado en pisicina semiolimpica ',url:'https//www.barracudas.com'}



contenedor.createActivity(actividad0)
contenedor.createActivity(actividad1)


console.log(contenedor.getAllActivities())

contenedor.deleteActivity(2);

console.log(contenedor.getAllActivities())

const actividad2 = {actividad:'Futbol',descripcion:'Amo jugar futbol todos los dias a las 6pm',url:'https//www.locosporverlarodar.com'}

contenedor.createActivity(actividad2)

console.log(contenedor.getAllActivities()) 

console.log(contenedor);


