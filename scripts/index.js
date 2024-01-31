
// Aca se crea la clase de las actividades que se van a crear y se van a ver reflejadas en la pagina..
class Activity {
    constructor(id,actividad,descripcion,url) {
        this.id = id;
        this.actividad = actividad;
        this.descripcion = descripcion;
        this.url = url;
    }
}

//Aca se crea la clase que va a almacenar lo que envie se le pase al formulario.
class Contenedor {
    //Este recibe una propiedad llamada actividades que recibe un arreglo vacio que va a recibir las actividades que se pasen en el formulario.
    constructor () {
        this.actividades = [];
    }
    //este nos va a reflejar todas las actividades que se vayan almacenando
    getAllActivities () {
    return this.actividades
    }
    //Este nos crea una instancia de la nueva actividad con sus datos y se almacena en el arreglo de actividades y muestra la actividad que se creo.
    createActivity (id,nombre,descripcion,url) {
    const nuevaActividad = new Activity(id,nombre, descripcion, url);
    this.actividades.push(nuevaActividad);
    return nuevaActividad;
    }

    //Esta elimina las actividades que se filtren de acuerdo a su id.
    deleteActivity (id) {
        this.actividades =this.actividades.filter((actividad)  => actividad.id !== id) 
    }

}

//PRUEBAS
const contenedor = new Contenedor ();

const actividad1 = contenedor.createActivity(1,'Ciclsimo','Salimos en bici hasta Dapa','https//www.ciclas.com')

const actividad2 = contenedor.createActivity(2,'Natacion','Nado en pisicina semiolimpica ','https//www.barracudas.com')

console.log(contenedor.getAllActivities())

contenedor.deleteActivity(2);

console.log(contenedor.getAllActivities())

contenedor.createActivity(3,'Futbol','Amo jugar futbol todos los dias a las 6pm','https//www.locosporverlarodar.com')

console.log(contenedor.nuevaActividad) //aca se accede a la ultima actividad creada.


