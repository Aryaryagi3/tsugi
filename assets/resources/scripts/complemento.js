"use strict";

let mm = 0;

let $ = function(id) {
    return document.getElementById(id);
}

let carregar = function carregar() {
    const value = localStorage.getItem('contastatus');
    jQuery('nav > div > div').addClass('opcoesDiv');

    jQuery('.opcoesDiv').html('<img class=\"opcoes\" alt=\"opcoes\" src=\"assets/resources/images/opcoes.png\">');

    if (value === 'true') {
        jQuery('#suaContaMenu').html('<li><button class=\"sairContaBotao\" id=\"sairConta\" onclick=\"sair()\">Sair da conta</button></li><li><div><a href=\"vender.html\"><button class=\"venderBotao\">Vender</button></a></div></li></div>');
    }
    if (value === 'false' || value === null) {
        $('suaContaMenu').innerHTML = '<ul class=\"conta\"><li><a id=\"criarContaBotao\" href=\"criar-conta.html\"><button class=\"criarContaBotao\">Criar Conta</button></a></li><li><a id=\"entrarContaBotao\" href=\"entrar-conta.html\"> <button class=\"entrarContaBotao\">Entrar na Conta</button></a></li></ul>';
    }

    jQuery('.opcoes').css('width', '50px').css('margin-right', '20px');

    jQuery('.opcoes').click(function () {
        jQuery('#suaContaMenu').fadeToggle(500);
    });

    let MangaJSON = JSON.stringify(a);

    JSON.parse(MangaJSON)
    console.log(MangaJSON);
}

let sair = function sair() {
    let confirmacao = confirm('Tem certeza que deseja sair da conta?');

    if (confirmacao === true) {
        localStorage.setItem('contastatus', 'false');
        carregar();
    }
}

jQuery('.opcoes').click(function () {
    jQuery('#suaContaMenu').fadeToggle(500);
});


jQuery('#titulo-site').css('color', 'white').css('font-size', '30px').css('text-align', 'left');
jQuery('.footer > div > p').css('font-size', '1.5rem');

jQuery(document).ready(function() {
    jQuery('.logo').mousemove(function() {
        jQuery('#titulo-site +#mouseOver').text(mm += 1);
        jQuery('#titulo-site +#mouseOver').css('color', 'white');
    })
})

