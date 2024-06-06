window.onload = async()=>{
    let libros = await obtenerLibros();
    mostrarLibros(libros);
    addFormEventUpdateBook();
}

async function obtenerLibros(){
    let url = window.location.origin + "/CRUD_Biblioteca_LautaLope/backEnd/controller/libroController.php?function=obtener";
    console.log(url);
    let consulta = await fetch(url);
    let libros = await consulta.json();
    return libros;
}

function mostrarLibros(libros){
    console.log(libros);
    let listaLibrosElement = document.querySelector("#listaLibros");
    listaLibrosElement.innerHTML = "";
    libros.forEach(libro => {
        let url = null;
        if(libro.extension == ""){
          url = "../../../backEnd/imgs/Image-not-found.png";
        }else{
            url = `../../../backEnd/imgs/${libro.id}.${libro.extension}`;
        }
        listaLibrosElement.innerHTML += `
            <div class="libro">
                <p>${libro.nombre}</p>
                <img src="${url}">
                <button class="btn" onclick="setInput(${libro.id},'${libro.nombre}', '${libro.fecha}', ${libro.precio});">Modificar</button>
            </div>
        `
    });
}

function setInput(id, nombre, fecha, precio) {
    let idInput = document.querySelector("#idInput");
    idInput.value = id;
    let nombreInput = document.querySelector("#nombreInput");
    nombreInput.value = nombre;
    let fechaInput = document.querySelector("#fechaInput");
    fechaInput.value = fecha;
    let precioInput = document.querySelector("#precioInput");
    precioInput.value = precio;
}

function addFormEventUpdateBook(){
    let form = document.querySelector("#frmModificarLibros");
    form.onsubmit = async (e)=>{
        e.preventDefault();
        let url = window.location.origin + "/CRUD_Biblioteca_LautaLope/backEnd/controller/libroController.php?function=modificar";
        let formdata = new FormData(form);
        let config = {
            method: "POST",
            body: formdata
        }
        let respuesta = await fetch(url,config);
        let datos = await respuesta.json();
        if(datos){
            let libros = await obtenerLibros();
            console.log(libros);
            mostrarLibros(libros);
        }
    }
}