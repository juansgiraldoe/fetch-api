//Fetch API. (Array json).

const cargarJSONArray = document.querySelector('#cargarJSONArray');
cargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = '../data/empleados.json';
  fetch(url)
    .then(res => res.json())
    .then(res => mostrarHtml(res));
};

function mostrarHtml( empleados ) {
  const contenido = document.querySelector('.contenido');
  let html = '';
  empleados.forEach( empleado => {
    const {empresa, id, nombre, trabajo} = empleado
    html += `
      <p>Empleado: ${nombre}</p>
      <p>ID: ${id}</p>
      <p>Empresa: ${empresa}</p>
      <p>Trabajo: ${trabajo}</p>
    `;
  });
  contenido.innerHTML = html;
}