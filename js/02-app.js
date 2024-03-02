//Fetch API. (json).

const cargarJSON = document.querySelector('#cargarJSON');
cargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = '../data/empleado.json';
  fetch( url )
    .then( res => res.json() )
    .then( res => mostrarHTML(res) );
};

function mostrarHTML( {empresa, id, nombre, trabajo} = res ) {
  const contenido = document.querySelector('.contenido');
  contenido.innerHTML = `
  <p>Empleado: ${nombre}</p>
  <p>ID: ${id}</p>
  <p>Empresa: ${empresa}</p>
  <p>Trabajo: ${trabajo}</p>
  `;
}