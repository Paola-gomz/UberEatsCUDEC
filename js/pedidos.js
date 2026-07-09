document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});

});

let contenidoLista = '';

db.collection("platillos").onSnapshot((datos) => {
    datos.docChanges().forEach((registro) => {
        if (registro.type === "added") {
            agregarALista(registro.doc.data(), registro.doc.id);
        }
    });
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});

function agregarALista(platillo, id){
    contenidoLista += `<option value='${id}'>
    ${platillo.Nombre}
    </option>`;
    document.getElementById("listaPlatillos").innerHTML = contenidoLista;
}

M.AutoInit();

document.getElementById("btnUbicacion").addEventListener("click", function() {
    if (navigator.geoLocation) {
        navigator.geoLocation.getCurrentPosition(exito,error);
    }
});

function exito(posicion) {
    let latitud = posicion.coords.latitude;
    let longitud = posicion.coords.longitude;
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon={longitud}&format=json`{
        headers: {
            'User-Agent': 'UberEatsPaola (paola.gomz.menchaca@gmail.com)'
        }
    })

    .then(respuesta => respuesta.json())
    .then(data => {
        let ciudad = data.address.city;
        let pais = data.addres.country;
        document.getElementById("direccion").value = `${ciudad}, ${pais}`;
    } )
}
    

const formularioAgregar = document.querySelector("form");
formularioAgregar.addEventListener("submit", (e) => {
    e.preventDefault();
    const platilloNuevo = {
        Nombre: formularioAgregar.title.value,
        Ingredientes: formularioAgregar.ingredients.value,
        precio: formularioAgregar.price.value
    } 

    db.collection("platillos").add(platilloNuevo)
    .catch((error) => {
        console.log(error);
       alert("Platillo agregado");
    }
    );

    formularioAgregar.title.value = "";
    formularioAgregar.ingredients.value ="";
    formularioAgregar.price.value ="";
    alert("Pedido agregado");
});
