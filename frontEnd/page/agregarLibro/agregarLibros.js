window.onload = ()=>{
    addFormEventCreateBook();
}

//ESTO VA SIEMPRE
function addFormEventCreateBook(){
    let formAgregarLibroElement = document.querySelector("#frmAgregarLibros");
    formAgregarLibroElement.onsubmit = (e)=>{
        e.preventDefault();
        enviarLibro(formAgregarLibroElement);
    }

}

async function enviarLibro(form){
    let formData = new FormData(form);
    let url = window.location.origin + "/CRUD_Biblioteca_LautaLope/backEnd/controller/libroController.php?function=agregar";
    let config = {
        method: 'POST' ,
        body: formData
    }
    let respuesta = await fetch(url, config);
    let datosRespuesta = await respuesta.json();
    if(datosRespuesta){
        alert("Libro agregado con Éxito");
    }else{
        alert("Error al agregar el Libro");
    }
}