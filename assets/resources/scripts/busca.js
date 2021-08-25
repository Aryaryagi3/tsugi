"use strict";

let carregarBusca = function carregarBusca() {
    let valor = localStorage.getItem('busca');
    let str = '';

    for (i in mangas) {
         if ( valor === mangas[i].titulo) {
            str += '<div class=\"produtoBusca\">' + '<img class=\"produtoBuscaFoto\"alt=\"Produtoimagem\" src=\"' + mangas[i].foto + '\"> <p class=\"produtoBuscaTitulo\">' + mangas[i].titulo + '</p>' + '<p class=\"produtoBuscaVolume\">Volume ' + mangas[i].volume + '</p>' + '<p  class=\"produtoBuscaPreco\">' + mangas[i].preco + '</p>' + '<form id=\"ProdutoLink\" action=\"Produto.html\">' + '<button id=\"ProdutoBotao\" class=\"botaoComprar\" value=\"' + mangas[i].id + '\" onClick=\"atualizarProduto(this)\">Comprar</button> </form> </div>';
         }
    }

    $('resultados').innerHTML = str;

    carregar();
}

let atualizarProduto2 = function atualizarProduto2(botao) {
    let produto = botao.value;

    localStorage.setItem('atual', produto);
}
