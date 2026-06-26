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