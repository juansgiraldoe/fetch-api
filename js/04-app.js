//Fetch API. (API's)

const cargarAPI = document.querySelector('#cargarAPI');
cargarAPI.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = 'https://picsum.photos/list';
  fetch(url)
    .then(res => res.json())
    .then(res => mostrarHTML(res));
};

function mostrarHTML(datos) {
  const contenido = document.querySelector('.contenido');
  let html = '';

  datos.forEach( i => {
    const { author, post_url } = i
    html += `
    <p>Autor: ${author}</p>
    <a href='${post_url}'>Ver imagen</a>
    `;
  });
  contenido.innerHTML = html;
}