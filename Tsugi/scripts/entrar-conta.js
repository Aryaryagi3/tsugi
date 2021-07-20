var btn = $("botaoEntrar");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    entrarConta();
});

function entrarConta() {
    var email = $("email").value;
    var senha = $("senha").value;

    if ((email == undefined) || (email == "")) {
        alert("O campo de email não foi preenchido!!");
        return false;
    }

    if ((senha == undefined) || (senha == "")) {
        alert("O campo de senha não foi preenchido!!");
        return false;
    }

    for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (key == email) {
            if (value == senha) {
                alert("Bem vindo de volta!");
                localStorage.setItem("contastatus", "true");
                localStorage.setItem("senha", senha);
                carregar();
                return true;
            }
        }
    }

    alert("Seus dados não foram compatíveis com nenhuma conta registrada, tente novamente!");
    return false;
}

