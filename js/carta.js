const textocarta = `Para mi Génesis, para mi amor...

Empezamos como 2 desconocidos que se ayudaban entre sí: tú con carátulas, yo con tus trabajos de programación...
Pero poco a poco, esos pequeños gestos se convirtieron en algo más grande.
Dios nos puso juntos en la agencia, en nuestras pasantías, para conocernos mejor. Conocí más a una mujer increíble, tu personalidad fue lo que me enamoró, tu risa que me alegraba el día, y tu forma de ser que me atrapó. ¿Cómo no amarte?
¿Cómo no amarte, Génesis? Tu corazón tan grande, tu bondad, tu dulzura, tus bromas, incluso tu forma de caminar jajaja... Miraba a una pequeña caminar enojada a veces cuando la hacía enojar, pero eso me encanta. Me encanta todo de ti, y no podía dejar de pensar en ti amor.

En tutorías, cuando fui por ti a verte y se me desvió la mano jaja perdón...
Fuimos a comprar para la comida de tu casa, me sentía tan feliz, me decías “amor” cada 2 segundos, me llenabas de felicidad, y prometimos amor... y esta promesa ya fue con besito, tocar toda esa fila de timbres.

Y todo empezó por verte dormido ayy jajaja, escuchar tus bromas y tus risas, y ver cómo te preocupabas por mí, cómo me ayudabas con mis problemas, y cómo siempre estabas ahí.

Cuando mi chiquitita casi se cae por ir a buscar un sellador, los almuerzos juntos... Amor, ¿te acuerdas que un día estábamos almorzando y Chimbolema dijo algo, y solo dijo “tiré un facto” y me dejó con la duda?

Prometimos jugar a los helados y al agua y fuego, y esa aún no va con besito, pero lo haremos amor.
Prometimos que siempre estaríamos juntos, y que nunca nos separaríamos.

Y aquí estamos, después de todo lo que hemos pasado, después de todas las risas, las lágrimas y los momentos juntos. Seguimos aquí, más fuertes que nunca.

Y quiero que sepas que siempre estaré aquí para ti, que siempre te amaré, y que siempre seré tu apoyo incondicional.

Eres mi todo, mi razón de ser, y no puedo imaginar mi vida sin ti.
Gracias por ser la persona maravillosa que eres, por hacerme sentir amado, y por hacerme tan feliz.

Te amo más de lo que las palabras pueden expresar, y siempre estaré aquí para ti.

Te amo Génesis, por siempre y para siempre, y no puedo esperar a ver lo que el futuro nos depara juntos.

Con todo mi amor,
Tu Daniel 🐈‍
`;

let i = 0;
const velocidad = 40; // Puedes subir a 30-40 si quieres que vaya más lento

function escribir() {
  const contenedor = document.getElementById("texto-carta");
  if (!contenedor) return;

  if (i < textocarta.length) {
    contenedor.innerHTML += textocarta.charAt(i);
    i++;
    setTimeout(escribir, velocidad);
  } else {
    // Mostrar la imagen solo al final
    const imagen = document.getElementById("imagen-final");
    if (imagen) {
      imagen.style.display = "block";
      imagen.classList.add("visible");
    }
  }
}

// ¡Iniciar la animación!
escribir();
const decoracionesContenedor = document.getElementById('decoraciones');

const tipos = ['corazon', 'nube', 'estrella'];
const colores = ['#f7c8f3', '#b2d8d8', '#d8b2f5']; // Pasteles

function crearDecoracion() {
  const tipoIndex = Math.floor(Math.random() * tipos.length);
  const tipo = tipos[tipoIndex];

  const div = document.createElement('div');
  div.classList.add('decoracion', tipo);

  // Posición random dentro de viewport
  div.style.top = `${Math.random() * 90}vh`;
  div.style.left = `${Math.random() * 90}vw`;

  // Tamaño aleatorio pequeño
  const size = 20 + Math.random() * 30;
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  // Color pastel aleatorio
  div.style.backgroundColor = colores[tipoIndex];

  // Velocidad animación random
  div.style.animationDuration = `${4 + Math.random() * 4}s`;

  decoracionesContenedor.appendChild(div);

  // Eliminar después de 20s para no llenar DOM
  setTimeout(() => {
    div.remove();
  }, 10000);
}

// Crear 20 decoraciones al inicio
for(let i=0; i<40; i++) {
  crearDecoracion();
}

// Crear decoraciones nuevas cada 1.5s para que siempre haya flotando
setInterval(crearDecoracion, 1000);
