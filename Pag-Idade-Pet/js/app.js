let btn = document.getElementById('btn');
let table = document.getElementById('resultado');

let arrCachorro = [];

function cadastrar() {
  let cachorro = {
    nome: document.getElementById('nome').value,
    idadeCanina: document.getElementById('idadeCanina').value, 
    raça: document.getElementById('raça').value,
    peso: document.getElementById('peso').value, 
    porte: document.getElementById('porte').value,
    mostrarIdadeHumana: calcularIdadeHumana(document.getElementById('idadeCanina').value),
  };

  arrCachorro.push(cachorro);
  console.log(arrCachorro);

  imprimir();
}

function imprimir() {
  table.innerHTML = '';
  for (let i = 0; i < arrCachorro.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${arrCachorro[i].nome}</td>
        <td>${arrCachorro[i].mostrarIdadeHumana}</td>  
        <td>${arrCachorro[i].raça}</td>
        <td>${arrCachorro[i].peso}</td>
        <td>${arrCachorro[i].porte}</td>
      </tr>
    `;
  }
}

function calcularIdadeHumana(idadeCanina) {
  let idadeHumana;

  if (idadeCanina <= 1) {
    idadeHumana = idadeCanina * 15;
  } else if (idadeCanina === 2) {
    idadeHumana = 15 + 9;
  } else if (idadeCanina <= 3) {
    idadeHumana = 15 + 9 + (idadeCanina - 2) * 4;
  } else if (idadeCanina <= 5) {
    idadeHumana = 15 + 9 + (idadeCanina - 2) * 5;
  } else {
    idadeHumana = 15 + 9 + (idadeCanina - 2) * 6;
  }

  return idadeHumana;
}

btn.addEventListener('click', cadastrar);
