
function busca() {
    var busca = $("buscaValor").value;

    localStorage.setItem("busca", busca);
}

function carregarBusca() {
    valor = localStorage.getItem("busca");
    var str = "";

    for (i in mangas) {
         if ( valor == mangas[i].titulo) {
            str += "<div class=\"produtoBusca\">" + "<img class=\"produtoBuscaFoto\" alt=\"Produto imagem\" src=\"" + mangas[i].foto + "\"> <p class=\"produtoBuscaTitulo\">" + mangas[i].titulo + "</p>" + "<p class=\"produtoBuscaVolume\">Volume " + mangas[i].volume + "</p>" + "<p  class=\"produtoBuscaPreco\">" + mangas[i].preco + "</p>" + "<form id=\"ProdutoLink\" action=\"Produto.html\">" + "<button id=\"ProdutoBotao\" <button class=\"botaoComprar\" value=\""+ mangas[i].id +"\" onClick=\"atualizarProduto(this)\">Comprar</button> </form> </div>";
         }
    }

    $("resultados").innerHTML = str;

    carregar();
}

function atualizarProduto(botao) {
    var produto = botao.value;

    localStorage.setItem("atual", produto);
}
