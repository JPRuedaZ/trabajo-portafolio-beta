/* describe ('testeando una funcion', ()=> {
    it('vamos a ver que devuelva un 2', ()=>{
        expect(1+1).toBe(2);
        expect(2+0).toBe(2);
        expect(5-3).toBe(2);
    });
 }) */

 const {Activity, Contenedor, convertirHTML,mostrarActividades,handler,eliminar} = require('../scripts/copiaindex');

 describe('La clase Contenedor', () => {
    it('Debe ser una clase', () => {
        const contenedor = new Contenedor();
        expect(contenedor).toBeInstanceOf(Contenedor)
    })

    it('Debe tener el metodo getAllActivities', () => {
        const contenedor = new Contenedor();
        const metodoGetAll = contenedor.getAllActivities();
        expect(metodoGetAll).toBeDefined();
        expect(Array.isArray(metodoGetAll)).toBe(true);
        expect(typeof contenedor.getAllActivities).toBe('function');
        expect(metodoGetAll).toEqual([]);
        expect(metodoGetAll).toBeTruthy();
    })

    it('Debe tener el metodo createActivity ', () => {
        const contenedor = new Contenedor();
        expect(typeof contenedor.createActivity).toBe('function');
        expect(contenedor.createActivity).toBeDefined();
        const activity = new Activity({id:1,actividad:'pesca',descripcion:'me gusta pescar',url:'http://www.pescadores.com'})
        contenedor.createActivity({id:this.id,...activity})
        const initialActivitiesLength = contenedor.actividades.length;
        expect(contenedor.actividades.length).toEqual(1);
        expect(contenedor.actividades.length).toBe(initialActivitiesLength);
    })

    it('Debe tener el metodo deleteActivity ', () => {
        const contenedor = new Contenedor();
        const activity1 = new Activity({id:1,actividad:'pesca',descripcion:'me gusta pescar',url:'http://www.pescadores.com'})
        contenedor.createActivity({id:this.id,...activity1})
        
        expect(typeof contenedor.deleteActivity).toBe('function');
        expect(contenedor.deleteActivity).toBeDefined();
        expect(() =>contenedor.deleteActivity(1)).not.toThrow({});
        const activity2 = new Activity({id:2,actividad:'pesca',descripcion:'me gusta pescar',url:'http://www.pescadores.com'})
        contenedor.createActivity({id:this.id,...activity2})
        expect(contenedor.actividades.length).toBe(1);
        expect(contenedor.actividades).toEqual([activity2]);
    })

    it('La funcion convertirHTML debe ser una funcion', () => {
        const actividad = {
            id:1,
            actividad:'pesca',
            descripcion:'me gusta pescar',
            url:'http://www.pescadores.com'
        }
       
        expect(convertirHTML).toBeInstanceOf(Function);
        expect(typeof convertirHTML).toBe('function');
        expect(convertirHTML).toBeDefined();
        expect(convertirHTML).not.toThrow('');
        expect(convertirHTML).not.toBe('');
        expect(convertirHTML).not.toBeUndefined();
        expect(convertirHTML).not.toBeNull();
        expect(convertirHTML).not.toBeNaN();  
        
    })

    it('La funcion mostrarActividades debe ser una funcion', () => {
        expect(mostrarActividades).toBeInstanceOf(Function);
        expect(typeof mostrarActividades).toBe('function');
        expect(mostrarActividades).toBeDefined();
        expect(mostrarActividades).not.toThrow('');
        expect(mostrarActividades).not.toBe('');
        expect(mostrarActividades).not.toBeUndefined();
        expect(mostrarActividades).not.toBeNull();
        expect(mostrarActividades).not.toBeNaN();
    })

    it('La funcion handler debe ser una funcion', () => {
        expect(handler).toBeInstanceOf(Function);
        expect(typeof handler).toBe('function');
        expect(handler).toBeDefined();
        expect(handler).not.toThrow('');
        expect(handler).not.toBe('');
        expect(handler).not.toBeUndefined();
        expect(handler).not.toBeNull();
        expect(handler).not.toBeNaN();
    })

    it('La funcion eliminar debe ser una funcion', () => {
        expect(eliminar).toBeInstanceOf(Function);
        expect(typeof eliminar).toBe('function');
        expect(eliminar).toBeDefined();
        expect(eliminar).not.toThrow('');
        expect(eliminar).not.toBe('');
        expect(eliminar).not.toBeUndefined();
        expect(eliminar).not.toBeNull();
        expect(eliminar).not.toBeNaN();
    })
 })