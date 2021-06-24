function countsByLetter(params) {
  const text = document
    .getElementById("texto-entrada")
    .innerText.trim()
    .toLocaleLowerCase();

  contenedor = {};
  for (let i = 0; i < text.length; i++) {
    let letra_actual = text[i];
    if (contenedor[letra_actual]) {
      contenedor[letra_actual] += 1;
    } else {
      contenedor[letra_actual] = 1;
    }
  }
  return contenedor;
}

function text(letter, cant) {
  var div = document.getElementById("resultados");

  var p = document.createElement("p");
  div.appendChild(p);

  var strong = document.createElement("strong");
  var textp_strong = document.createTextNode("Letra: " + letter);
  strong.appendChild(textp_strong);
  p.appendChild(strong);

  var span = document.createElement("span");
  var texto_span = document.createTextNode(", Cantidad: " + cant);
  span.appendChild(texto_span);
  p.appendChild(span);
}

Object.entries(countsByLetter()).forEach((array) => {
  text(array[0], array[1]);
});

// console.log(countsByLetter);

const word = document
  .getElementById("texto-entrada")
  .innerText.trim()
  .toLowerCase()
  .split(" ");

let acum = {};
for (let i = 0; i < word.length; i++) {
  const palabra_actual = word[i];
  if (acum[palabra_actual]) {
    acum[palabra_actual] += 1;
  } else {
    acum[palabra_actual] = 1;
  }
}

function text_word(words, quantity) {
  var div = document.getElementById("resultado");

  var p = document.createElement("p");
  div.appendChild(p);

  var strong = document.createElement("strong");
  var texto_strong = document.createTextNode("Palabra: " + words);
  strong.appendChild(texto_strong);
  p.appendChild(strong);

  var span = document.createElement("span");
  var texto_span = document.createTextNode(" - Cantidad: " + quantity);
  span.appendChild(texto_span);
  p.appendChild(span);
}

Object.entries(acum).forEach((array) => {
  text_word(array[0], array[1]);
});
