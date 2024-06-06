window.onload = async()=>{
    let libros = await obtenerLibros();
    mostrarLibros(libros);
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
                <button class="btn" onclick="eliminar(${libro.id});">Eliminar Libro</button>
            </div>
        `
    });
}

async function eliminar(id) {
    let formdata = new FormData();
    formdata.append("id",id);
    let url = window.location.origin + "/CRUD_Biblioteca_LautaLope/backEnd/controller/libroController.php?function=eliminar";
    let config = {
        method: "POST",
        body: formdata
        }
    let respuesta = await fetch(url, config);
    let datos = await respuesta.json();
    if (datos) {
        let libros = await obtenerLibros();
        mostrarLibros(libros);
    }
}