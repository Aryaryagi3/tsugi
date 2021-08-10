"use strict";

let entrarConta = function entrarConta() {
    let email = $('email').value;
    let senha = $('senha').value;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (key === email) {
            if (value === senha) {
                alert('Bem vindo de volta!');
                localStorage.setItem('contastatus', 'true');
                localStorage.setItem('senha', senha);
                carregar();
                return true;
            }
        }
    }

    alert('Seus dados não foram compatíveis com nenhuma conta registrada, tente novamente!');
    return false;
}