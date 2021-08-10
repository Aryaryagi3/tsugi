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