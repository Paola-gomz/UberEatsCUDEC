let contenidoLista = '';
function agregarALista(platillo, id){
    contenidoLista = `<option value= ''>
    ${mostrarPlatillo.nombre}
    </option>`;
    document.getElementById('listaPlatillos').innerHTML = contenidoLista;
}