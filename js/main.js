function cargarSeccion(nombre) {
  fetch(`secciones/${nombre}.html`)
    .then(res => res.text())
    .then(html => {
      const contenedor = document.getElementById("contenido");
      contenedor.innerHTML = ""; // Limpiar antes de cargar
      contenedor.innerHTML = html;

      // Cargar JS especial (si existe)
      const script = document.createElement("script");
      script.src = `js/${nombre}.js`;
      script.onload = () => {
        console.log(`Script ${nombre}.js cargado`);
      };
      document.body.appendChild(script);
    })
    .catch(err => {
      console.error("Error al cargar sección:", err);
      document.getElementById("contenido").innerHTML = "<p>Error cargando sección 💔</p>";
    });
}


function pantallaCompleta() {
  const doc = document.documentElement;
  if (doc.requestFullscreen) doc.requestFullscreen();
  else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
}

function irASiguiente() {
  cargarSeccion('galeria');
}

function iniciarMusicaYContinuar(seccion) {
  const musica = document.getElementById("musica-fondo");
  if (musica && musica.paused) {
    musica.play().catch(() => {
      alert("Dale play a la música si no comienza automáticamente ❤️");
    });
  }
  cargarSeccion(seccion);
}
