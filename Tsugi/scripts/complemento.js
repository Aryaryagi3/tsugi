var $ = function(id) {
    return document.getElementById(id);
}

function carregar() {
    const value = localStorage.getItem("contastatus");
    if (value == "true") {
        $("suaContaMenu").innerHTML = "<li><button class=\"sairContaBotao\" id=\"sairConta\" onclick=\"sair()\">Sair da conta</button></li><li><div><a href=\"vender.html\"><button class=\"venderBotao\">Vender</button></a></div></li></div>";
    }
    if (value == "false" || value == null) {
        $("suaContaMenu").innerHTML = "<ul class=\"conta\"><li><a id=\"criarContaBotao\" href=\"criar-conta.html\"><button class=\"criarContaBotao\">Criar Conta</button></a></li><li><a id=\"entrarContaBotao\" href=\"entrar-conta.html\"> <button class=\"entrarContaBotao\">Entrar na Conta</button></a></li></ul>";
    }
}

function sair() {
    confirmacao = confirm("Tem certeza que deseja sair da conta?");

    if (confirmacao == true) {
        localStorage.setItem("contastatus", "false");
        carregar();
    }
}