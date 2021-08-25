"use strict";

let entrarConta = function entrarConta() {
    let x = document.getElementsByTagName('input');
    let email = x[1].value;
    let senha = $('senha').value;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (key === email) {
            if (value === senha) {
                let alerta = 'Bem vindo de volta!';
                alert(alerta.toLowerCase());
                localStorage.setItem('contastatus', 'true');
                localStorage.setItem('senha', senha);
                carregar();
                return true;
            }
        }
    }

    function transformarMaiusculo(txt) {
        return txt.toUpperCase();
    }

    let alerta2 = 'AAAAAAAAAASeus dados não foram compatíveis com nenhuma conta registrada, tente novamente!';
    alert(transformarMaiusculo(alerta2.substring(10, 89)));
    return false;
}