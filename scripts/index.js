// Esta clase Activity sirve como un "molde" para crear objetos de actividad. Cuando se crea una nueva instancia de Activity, se espera que se le pase un objeto act con propiedades como id, actividad, descripcion, y url. La instancia de Activity entonces tiene estas propiedades y puede utilizarse para representar y manipular información sobre una actividad específica.
class Activity {
  constructor({id, actividad, descripcion, url}) {
    this.id = id;
    this.actividad = actividad;
    this.descripcion = descripcion;
    this.url = url;
  }
}

//En resumen, la clase Contenedor permite gestionar un conjunto de actividades. Puedes agregar actividades, obtener la lista de todas las actividades almacenadas y eliminar actividades según su id. La clase trabaja en conjunto con la clase Activity para representar y manipular información sobre actividades.
class Contenedor {
  //El constructor de la clase inicializa las propiedades actividades e id. actividades es un array vacío que se utilizará para almacenar instancias de la clase Activity. id se inicializa en 0 y se utiliza para asignar identificadores únicos a cada actividad.
  constructor() {
    this.actividades = [];
    this.id = 0;
  }
  // Este método devuelve el array actividades, que contiene todas las instancias de actividades almacenadas en el contenedor.
  getAllActivities() {
    return this.actividades;
  }
  //Este método crea una nueva instancia de Activity utilizando el objeto act proporcionado como argumento. Se incrementa el id en 1 para asignar un identificador único a la nueva actividad. La actividad se agrega al array actividades.
  createActivity(act) {
    this.id++;
    const activity = new Activity({id:this.id, ...act});
    this.actividades.push(activity);
  }

  //Este método elimina una actividad del array actividades según el id proporcionado. Utiliza el método filter para crear un nuevo array que excluye la actividad con el id dado.
  deleteActivity(id) {
    this.actividades = this.actividades.filter((act) => act.id !== id);
  }
}

//Aca se inicializa la plantilla del contenedor que es un array que tiene actividades y un contador id y nos metodos.
const repositorio = new Contenedor();

//Esta funcion toma la instancia activity y lo convierte a HTML para que el DOM pueda leerlo y reflejarlo
function convertirHTML(activity) {

  let { id, actividad, descripcion, url } = activity;
  const actividadInput = document.createElement("h3");
  actividadInput.classList.add('actv')
  const descripcionInput = document.createElement("p");
  descripcionInput.classList.add('descrip')
  const imagenInput = document.createElement("img");
  imagenInput.classList.add('img')
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  actividadInput.innerText = actividad;
  descripcionInput.innerText = descripcion;
  imagenInput.src = url;

  tarjeta.appendChild(actividadInput);
  tarjeta.appendChild(descripcionInput);
  tarjeta.appendChild(imagenInput);
  

  return tarjeta;
}

//Esta funcion refleja las actividades que estan en el contenedor
function mostrarActividades () {
    //Aca lo vacia primero
    const recolector = document.getElementById('recolector');
    recolector.innerHTML = '';
    //Muestra todas las actividades
    const lista = repositorio.getAllActivities();
    //Aca obtiene todas las actividades pero en un array y como el DOM no las puede leer entonces llama la funcion convertir para pasarlo a HTML y tener un array de elementos de HTML 
    const mapeo = lista.map((actividad) => {return convertirHTML(actividad)})
    //luego recorre esos elementos de HTML y los agrega al recolector que es el contenedor.
    mapeo.forEach(actividad => recolector.appendChild(actividad));
}

// Esta funcion es la manejadora de los eventos con el boton agregar
function handler () {
    //selectores de los valores de los inputs y el boton y formulario
    const selectAct = document.getElementById('actividad').value;
    const selectDescrip = document.getElementById('descripcion').value;
    const selectImg = document.getElementById('imagen').value;
    const buttonAgrega = document.getElementById('add-img');
    const formulario = document.getElementById('mis-actividades');
    //un condicional para validar que no coloquen datos vacios 
    if (
        selectAct.value !== "" &&
        selectDescrip.value !== "" &&
        selectImg.value !== ""
      ) {
        //aca el boton va a estar habilitado 
        buttonAgrega.disable = false;
        //aca el repositorio (la plantilla) va a recibir el objeto como parametro({}) =>(cada propiedad proveniente de el valor de cada input almacenado en las variables declaradas) como esta en el metodo de la plantilla.
        repositorio.createActivity({actividad: selectAct, descripcion: selectDescrip, url: selectImg})
        mostrarActividades()
        //cuando se cree la actividad se reinicia el formulario.
        formulario.reset();
      } else {
        buttonAgrega.disable = true;
        return alert("Debes diligenciar todos los datos");
      }
}

//Aca se seleccionan los botones y se crea el manejo de eventos con ambos.
const boton = document.getElementById('add-img');
boton.addEventListener('click', handler);

function eliminar () {
    const recolector = document.getElementById('recolector');
    recolector.removeChild(recolector.lastChild);
}

const boton2 = document.getElementById('del-img');
boton2.addEventListener('click',eliminar);









