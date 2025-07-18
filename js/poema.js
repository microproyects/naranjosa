const texto = `
Leidy, mi amor, mi dulce naranjosa,
Génesis, mi estrella preciosa,
mi princesa de risas y sueños,
mi luz en días pequeños.

Gracias por estar a mi lado,
en cada momento complicado,
cuando fallé y tú confiaste,
con abrazo y perdón me abrazaste.

Este mundo es frío y cruel,
no sigue el plan de Dios fiel,
pero tú y yo, gatitos naranjosos,
somos amor puro, fuertes y hermosos.

Soñamos juntos un dulce hogar,
con besitos que saben a mar,
porque en medio de la tormenta y el viento,
nuestro amor es firme y sincero sentimiento.

Te amaré mis siete vidas,
y en las que aún no son partidas,
mi compañera, mi sol y mi paz,
mi refugio eterno, donde siempre estarás.
`;

let ii = 0;
const velocidadd = 40;

function escribirr() {
  if (ii < texto.length) {
    document.getElementById("texto-poema").innerHTML += texto.charAt(ii);
    ii++;
    setTimeout(escribirr, velocidadd);
  } else {
    document.getElementById("texto-poema").innerHTML = 
      document.getElementById("texto-poema").innerHTML.replace('|', '');
  }
}

// Ejecuta la función escribir directamente (ya que el DOM está cargado y el contenido inyectado)
escribirr();
