(() => {

  // Ejemplo: hacer que las imágenes se destaquen al hacer clic
  const imgs = document.querySelectorAll('.seccion-galeria .imagenes img');

  imgs.forEach(img => {
    img.addEventListener('click', () => {
      imgs.forEach(i => i.classList.remove('destacado'));
      img.classList.add('destacado');
    });
  });
})();
