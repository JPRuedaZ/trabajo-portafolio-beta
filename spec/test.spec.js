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
        const initialActivitiesLength = contenedor.actividades.length;
        expect(typeof contenedor.createActivity).toBe('function');
        expect(contenedor.createActivity).toBeDefined();
        expect(contenedor.actividades.length).toBe(initialActivitiesLength + 1);
        


    })

    it('Debe tener el metodo deleteActivity ', () => {

    })

 })