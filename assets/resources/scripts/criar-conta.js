"use strict";
let email = document.querySelector('#email');
let botaoCriar = document.querySelector('#botaoCriar');

botaoCriar.addEventListener('click',() => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Insira um email válido!!');
    } else {
        email.setCustomValidity('');
    }
})

let criarConta = function criarConta() {
    let email = $('email').value;
    let nome = $('nome').value;
    let senha1 = $('senha1').value;
    let senha2 = $('senha2').value;
    let senha = $('senha1').value;

    if (senha1 !== senha2) {
        alert('As duas senhas inseridas não batem!!');
        return false;
    }

    localStorage.setItem(email, senha);
    localStorage.setItem(senha, nome);
    localStorage.setItem('contastatus', 'true');
    localStorage.setItem('senha', senha);

    carregar();

    alert('Sua conta foi criada com sucesso!!');

    return true;
}
jQuery('#cpf').mask('000.000.000-00');

function teclado(event) {
  var x = event.charCode;
  document.getElementsByName('charCodeEvento')[0].innerHTML = "Valor char code da primeira tecla digitada é: " + x;
}

function focusEvento(x) {
  x.style.background = '#ff9999';
}

function blurEvento(x) {
  x.style.background = 'white';
}