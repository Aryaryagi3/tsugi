var btn = $("botaoVender");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    criarManga();
});

function criarManga() {
    var foto = $("foto").value;
    var titulo = $("titulo").value;
    var tipo = $("tipo").value;
    var volume = $("volume").value;
    var preco = $("preco").value;
    var frete = $("frete").value;
    var detalhes = $("detalhes").value;

    if ((foto == undefined) || (foto == "")) {
        alert("O campo de imagem não foi preenchido!!");
        return false;
    }
    if ((titulo == undefined) || (titulo == "")) {
        alert("O campo de título não foi preenchido!!");
        return false;
    }
    if ((volume == undefined) || (volume == "")) {
        alert("O campo de volume não foi preenchido!!");
        return false;
    }
    if ((preco == undefined) || (preco == "")) {
        alert("O campo de preço não foi preenchido!!");
        return false;
    }
    if ((frete == undefined) || (frete == "")) {
        alert("O campo de frete não foi preenchido!!");
        return false;
    }
    if ((detalhes == undefined) || (detalhes == "")) {
        alert("O campo de detalhes não foi preenchido!!");
        return false;
    }

    var manga = new Manga("", foto , titulo, "", tipo, volume, preco, frete, detalhes, "Não vendido");
    mangasProdutos.push(manga);
    carregarVender();

    return true;
}

function carregarVender() {
    let str = "";

    for (i in mangasProdutos) {
        str += "<div class=\"produtoVen\"> <img class=\"produtoFotoVen\" alt=\"Produto imagem\" src=\"imagens/" + mangasProdutos[i].foto + "\"> <h1 class=\"ProdutoTituloVen\">" + mangasProdutos[i].titulo + "</h1>" + "<h1 class=\"ProdutoVolumeVen\">Volume " + mangasProdutos[i].volume + "</h1>" + "<h1 class=\"ProdutoPrecoVen\">R$ " + mangasProdutos[i].preco + "</h1> <h1 class=\"ProdutoVenVen\">" + mangasProdutos[i].vendido + "</h1> </div>";
    }
    $("seusProdutos").innerHTML = str;

    carregar();
}

function validaBusca() {
    var valor = $("buscaValor").value;

    if ((valor == undefined) || (valor == "")) {
        alert("Por favor, insira algo no campo de busca!");
        return false;
    }
    return true;
}