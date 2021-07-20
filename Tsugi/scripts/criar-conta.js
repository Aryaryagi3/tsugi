var btn = $("botaoCriar");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    criarConta();
});

function criarConta() {
    var email = $("email").value;
    var nome = $("nome").value;
    var senha1 = $("senha1").value;
    var senha2 = $("senha2").value;
    var senha = $("senha1").value;

    if ((email == undefined) || (email == "")) {
        alert("O campo de email não foi preenchido!!");
        return false;
    }
    if ((nome == undefined) || (nome == "")) {
        alert("O campo de nome não foi preenchido!!");
        return false;
    }
    if ((senha1 == undefined) || (senha1 == "")) {
        alert("O campo de senha não foi preenchido!!");
        return false;
    }
    if ((senha2 == undefined) || (senha2 == "")) {
        alert("O campo de repetir a senha não foi preenchido!!");
        return false;
    }
    if (senha1 != senha2) {
        alert("As duas senhas inseridas não batem!!");
        return false;
    }

    localStorage.setItem(email, senha);
    localStorage.setItem(senha, nome);
    localStorage.setItem("contastatus", "true");
    localStorage.setItem("senha", senha);

    carregar();

    alert("Sua conta foi criada com sucesso!!");

    return true;
}