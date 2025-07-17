function irASiguiente() {
  window.location.href = "seccion1.html";
}

// Opcional: iniciar música al click si el navegador lo bloquea
document.addEventListener("click", () => {
  const audio = document.getElementById("musica-fondo");
  if (audio.paused) {
    audio.play();
  }
});
