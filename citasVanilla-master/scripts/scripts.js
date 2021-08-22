
let formulario = document.querySelector('#formulario');
let listarCita = document.getElementById('listarCita');
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');
let citas = [];


let comprobar = JSON.parse(localStorage.getItem('Citas'));
let id = 0;

if( comprobar !== null){
    citas  = JSON.parse(localStorage.getItem('Citas'));
    if( citas.length > 0){
    id = citas[0].id;
    }
}
const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    id += 1;

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas,
        id
    }

    citas.unshift(registro);
    localStorage.setItem('Citas',JSON.stringify(citas));
    getLocalStorage();
  
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturaDatos();
    document.querySelector('form').reset();
})


const getLocalStorage = () =>{
    listarCita.innerHTML = '';
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'));
    //console.log(citasLocalStorage);
    citasLocalStorage.map(cita => {
        const {nombre,fecha,hora,sintomas} = cita;
        listarCita.innerHTML += `
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
        `   
     })
}

document.addEventListener('DOMContentLoaded',getLocalStorage);

buscar.addEventListener('click', e => {
    e.preventDefault();
    buscarItem()
    document.getElementById('inputBuscar').value = "";
})

function buscarItem(){
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Citas'));
    let filtro = data.filter(cita => cita.nombre.toLowerCase()  === input.toLowerCase())
    busqueda.innerHTML = '';  
    console.log(filtro)  
   
    filtro.length === 0 ?
        busqueda.innerHTML += `<div style="color:white;">El nombre ${input} no existe</div>`
        :
        (
        filtro.map(cita => { 
            const {nombre,fecha,hora,sintomas,id} = cita;
            busqueda.innerHTML += `
                    <div style="color:white;">${nombre}</div>
                    <div style="color:white;">${fecha}</div>
                    <div style="color:white;">${hora}</div>
                    <div style="color:white;">${sintomas}
                    <button id="${id}">Borrar</Button></div><br>             
                `  
                })
          )
     document.getElementById('busqueda').style.display = 'inline-block'
}

busqueda.addEventListener('click', (e) =>{
    let data = JSON.parse(localStorage.getItem('Citas'));
    
    console.log(data)
    
    if (e.target.innerHTML == 'Borrar') {
        let id2 = e.target.id;
        let indexArreglo2;
        console.log(citas)
        console.log(id)
        data.forEach((elemento, index) => {
            if (elemento.id == id2)
                indexArreglo2 = index;
                console.log(index)
        })
    
        data.splice(indexArreglo2, 1);
        localStorage.setItem('Citas',JSON.stringify(data));
        getLocalStorage();
        console.log(id2)
        buscarItem()
    }
})









