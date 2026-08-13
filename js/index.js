let contenido = '';


document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

function mostrarPlatillo(platillo, id) {
  contenido +=`
  <div class="card-panel recipe white row" id="${id}">
  <div class="recipe-details">
    <div class="recipe-tittle">
          ${platillo.Nombre}
          </div>
          <div class="recipe-ingredients">
            ${platillo.Ingredientes}
            </div>
            <div class="recipe-price">
            ${platillo.precio}
            </div>
          </div>
          <div class="recipe-delete">
                <i class="material-icons" data-id="${id}">delete_outline</i>
          </div>
        </div>`;
        
            
          
          

        
  document.querySelector('.recipes').innerHTML = contenido;
}

function actualizarPlatillo(platillo, id){
  let tarjeta = document.getElementById(`${id}`);
  tarjeta.querySelector(".recipe-tittle").innerHTML = platillo.Nombre;
  tarjeta.querySelector(".recipe-ingredients").innerHTML = platillo.Ingredientes;
  tarjeta.querySelector(".recipe-price").innerHTML = platillo.precio;
}

let streaming = false;
const width = 320;
let height = 0;
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const foto = document.getElementById('foto');
const btnFoto = document.getElementById('btnFoto');
const btnTomarFoto = document.getElementById('tomarFoto');

let streamActual = null;

btnFoto.addEventListener("click", function(){
    navigator.mediaDevices
    .getUserMedia({
        video: { facingMode: "environment" },
        audio: false
    })
    .then((stream)=> {
        video.srcObject = stream; // aquí debe ser video, no VideoFrame
        video.play();
    })
    .catch((error) => {
        console.log(error);
    });
});

video.addEventListener("canplay", ()=>{
    if (!streaming){
        height = video.videoHeight / (video.videoWidth / width);
        video.setAttribute("width", width);
        video.setAttribute("height", height);
        streaming = true; 
    }
});

btnTomarFoto.addEventListener("click", tomarFoto);

function tomarFoto(){
    const contexto = canvas.getContext("2d");
    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        contexto.drawImage(video, 0, 0, width, height);
        const fotoFinal = canvas.toDataURL("image/png"); // aquí generas la imagen
        foto.setAttribute("src", fotoFinal);
    } else {
        limpiarFoto();
    }
}

function limpiarFoto(){
    foto.src = "";
}

function detenerCamara() {
  if (streamActual) {
    streamActual.getTracks().forEach(track => {
      track.stop();
    });
    video.srcObject = null;
    streamActual = null;
    streaming = false;
  }
}