function atualizarProduto(botao) {
    var produto = botao.value;

    localStorage.setItem("atual", produto);
}

function carregarProduto() {
    var produto = localStorage.getItem("atual");
    for (i in mangas) {
         if (produto == mangas[i].id) {
              $("Produto").innerHTML = "<img class=\"produtoFoto\" alt=\"Produto imagem\" src=\"" + mangas[i].foto + "\"><h1 class=\"produtoTitulo\" id=\"ProdutoTitulo\">" + mangas[i].titulo + "</h1> <h1 class=\"produtoVolume\" id=\"ProdutoVolume\">Volume " + mangas[i].volume + "</h1>" + "<p class=\"produtoAutor\" id=\"ProdutoAutor\">por " + mangas[i].autor + "</p>" + "<h1 class=\"produtoPreco\" id=\"ProdutoPreco\">R$ " + mangas[i].preco + "</h1>" + "<p class=\"produtoDescricao\" id=\"ProdutoDescricao\">" + mangas[i].detalhes + "<p/>" + "<button class=\"addCarrinho\" value=\"" + mangas[i].id + "\" onClick=\"addCarrinho(this)\">Adicionar ao carrinho</button>";
         }
    }
    carregar();
}

function addCarrinho(botao) {
    var id = botao.value;
    localStorage.setItem(id, "carrinho");
    alert("Produto adicionado ao carrinho com sucesso!");
}


