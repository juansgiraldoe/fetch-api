//Fetch API. (Text).

const cargarText = document.querySelector('#cargarTxt');
cargarText.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  fetch('../data/datos.txt')
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));
};