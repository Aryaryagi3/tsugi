function carregarCarrinho() {
    var str = "";
    var preco1 = "";
    var preco2 = "";
    var total = 0;
    var comprar = "";
    var frete = 0;
    for (i in mangas) {
        for (var j = 0; j < localStorage.length; j++) {
            const key = localStorage.key(j);
            if (key == mangas[i].id) {
                str += "<div class=\"produtoCar\"> <img class=\"produtoFotoCar\" alt=\"Produto imagem\" src=\"" + mangas[i].foto + "\"> <h1 class=\"ProdutoTituloCar\">" + mangas[i].titulo + "</h1>" + "<h1 class=\"ProdutoVolumeCar\">Volume " + mangas[i].volume + "</h1>" + "<h1 class=\"ProdutoPrecoCar\">R$ " + mangas[i].preco + "</h1>" + "<button class=\"ProdutoBotaoCar\" value=\""+ mangas[i].id +"\" onClick=\"removerCarrinho(this)\">Remover produto</button> </div>";
                preco1 = mangas[i].preco;
                preco2 = preco1.replace(/,/g, '.');
                total += parseFloat(preco2, 10) + parseFloat(mangas[i].frete.replace(/,/g, '.'), 10);
                frete += parseFloat(mangas[i].frete.replace(/,/g, '.'), 10);

                localStorage.setItem("frete", frete);
                localStorage.setItem("preco", total);

                comprar = "<button class=\"botaoFecharPedido\" onclick=\"comprar()\" id=\"Comprar\">Fechar pedido</button>"
            }
        }
    }
    $("Carrinho").innerHTML = str;
    $("Total").innerHTML = "Total: R$ " + (total.toString()).replace(/\./g, ',');
    $("Comprar").innerHTML = comprar;

    carregar();
}

function removerCarrinho(botao) {
    var id = botao.value;

    localStorage.removeItem(id);
    carregarCarrinho();
}

function comprar() {
    confirmacao = confirm("Tem certeza que quer fechar o pedido?");

    if (confirmacao == true) {
        var numero = prompt("Insira um número de 0 a 200:")
            var sorte = Math.floor(Math.random() * 201);

            if (sorte == numero) {
               var preco = localStorage.getItem("preco");
               preco = parseFloat(preco,10);

               var precoDesconto = (preco - 20);

               if (precoDesconto < 0) {
                   precoDesconto = 0;
               }
               setTimeout(function() {
                    alert("Parabéns, você teve R$ 20 de desconto em sua compra! Total da compra: R$" + precoDesconto + " (R$ " + localStorage.getItem("frete") + " de frete)");
                    carregarCarrinho();
               }, 2000);
            }

            for (i in mangas) {
                for (var j = 0; j < localStorage.length; j++) {
                    const key = localStorage.key(j);
                    if (key == mangas[i].id) {
                        localStorage.removeItem(key);
                    }
                }
            }
            setTimeout(function() {
                alert("Compra realizada com sucesso! Total gasto: R$ " + localStorage.getItem("preco") + " (R$ " + localStorage.getItem("frete") + " de frete)");
                carregarCarrinho();
            }, 2000);
    }
}


