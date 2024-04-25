let btn = document.getElementById('btn');
let table = document.getElementById('resultado');

let arrGato = [];

function cadastrar() {
  let gato = {
    nome: document.getElementById('nome').value,
    idadeFelina: parseInt(document.getElementById('idadeFelina').value),
    raça: document.getElementById('raça').value,
    peso: parseFloat(document.getElementById('peso').value),
    porte: document.getElementById('porte').value,
    mostrarIdadeHumana: calcularIdadeHumana(document.getElementById('idadeFelina').value),
  };

  arrGato.push(gato);
  console.log(arrGato);

  imprimir();
}

function imprimir() {
  table.innerHTML = '';
  for (let i = 0; i < arrGato.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${arrGato[i].nome}</td>
        <td>${arrGato[i].mostrarIdadeHumana}</td>
        <td>${arrGato[i].raça}</td>
        <td>${arrGato[i].peso}</td>
        <td>${arrGato[i].porte}</td>
      </tr>
    `;
  }
}

function calcularIdadeHumana(idadeFelina) {
  let idadeHumana;

  if (idadeFelina <= 1) {
    idadeHumana = idadeFelina * 15;
  } else if (idadeFelina <= 4) {
    idadeHumana = 15 + (idadeFelina - 1) * 4;
  } else {
    idadeHumana = 15 + (idadeFelina - 4) * 6;
  }

  return idadeHumana;
}

btn.addEventListener('click', cadastrar);
