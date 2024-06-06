window.onload = async()=>{
    let libros = await obtenerLibros();
    mostrarLibros(libros);

}

async function obtenerLibros(){
    let url = window.location.origin + "/CRUD_Biblioteca_LautaLope/backEnd/controller/libroController.php?function=librosOrdenFecha";
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
            </div>
        `
    });
}

