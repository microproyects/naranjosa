// Cargar contenido dinámico
function cargarSeccion(nombreArchivo) {
  fetch(`secciones/${nombreArchivo}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('contenido').innerHTML = html;
      window.scrollTo(0, 0); // por si hace scroll
    });
}

// Mantener pantalla completa
function pantallaCompleta() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) elem.requestFullscreen();
}

// Primera sección al cargar
window.onload = () => {
  cargarSeccion('carta');
}
