
//Carne - 400gr por pessoa  até 6 horas + de 6 horas - 650gr
//Cerveja - 1200ml por pessoa até 6 horas  + 6 horas - 2000ml
//Refrigerante/agua - 1000ml por pessoa  até 6 horas  + 6 horas 1500ml

//Criança vale por 0,5 pessoa.


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

let linkMaps = document.getElementById('linkMap');

function calcular(){

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

 let qtdTotalCarne = carnePorPessoa(duracao) * adultos + ( carnePorPessoa(duracao) / 2 * criancas );
 let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
 let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + ( bebidasPorPessoa(duracao) / 2 * criancas );

 resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de Carne</p>`
 resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja (355ml)</p>`
 resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2L de bebidas</p>`

exibirDiv();

}

function localizar(){
  let local = document.getElementById('local').value;
  linkMaps.setAttribute('href', 'https://www.google.com.br/maps/search/' + local + ' supermercados' );

}

function carnePorPessoa(duracao){
  if (duracao >= 6){
    return 650;
  }
  else{
    return 400;
  }
}

  function cervejaPorPessoa(duracao){
    if (duracao >= 6){
      return 2000;
    }
    else{
      return 1200;
    }
  }

    function bebidasPorPessoa(duracao){
    if (duracao >= 6){
      return 1500;
    }
    else{
      return 100;
    }
  }

  function exibirDiv(){
    let div = document.getElementById("map");
    div.style.display = "block";
}
