function carregarHome() {
    let str1 = "";
    let str2 = "";
    let str3 = "";

    for (i in mangas) {
        str1 += "<div class=\"individuo\">" + "<img alt=\"Produto imagem\" src=\"" + mangas[i].foto + "\"> <p>" + mangas[i].titulo + "</p>" + "<p>Volume " + mangas[i].volume + "</p>" + "<p>R$ " + mangas[i].preco + "</p>" + "<form id=\"ProdutoLink\" action=\"Produto.html\">" + "<button id=\"ProdutoBotao\" <button class=\"botaoComprar\" value=\""+ mangas[i].id +"\" onClick=\"atualizarProduto(this)\">Comprar</button> </form> </div>";
    }

    for (i in mangas) {
        if (parseFloat(mangas[i].preco, 10) < 20 && mangas[i].tipo == "Novo") {
             str2 += "<div class=\"individuo\">" + "<img alt=\"Produto imagem\" src=\"" + mangas[i].foto + "\"> <p>" + mangas[i].titulo + "</p>" + "<p>Volume " + mangas[i].volume + "</p>" + "<p>R$ " + mangas[i].preco + "</p>" + "<form id=\"ProdutoLink\" action=\"Produto.html\">" + "<button id=\"ProdutoBotao\" <button value=\""+ mangas[i].id +"\" onClick=\"atualizarProduto(this)\">Comprar</button> </form> </div>";
        }
    }

    for (i in mangas) {
        if (parseFloat(mangas[i].preco, 10) < 15 && mangas[i].tipo == "Usado") {
             str3 += "<div class=\"individuo\">" + "<img alt=\"Produto imagem\" src=\"" + mangas[i].foto + "\"> <p>" + mangas[i].titulo + "</p>" + "<p>Volume " + mangas[i].volume + "</p>" + "<p>R$ " + mangas[i].preco + "</p>" + "<form id=\"ProdutoLink\" action=\"Produto.html\">" + "<button id=\"ProdutoBotao\" <button value=\""+ mangas[i].id +"\" onClick=\"atualizarProduto(this)\">Comprar</button> </form> </div>";
        }
    }

    $("lancamentos").innerHTML = str1;
    $("novo20").innerHTML = str2;
    $("usado15").innerHTML = str3;

    carregar();
}
