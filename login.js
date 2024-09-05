const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
let usuarios = [];

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "parabéns, você logou!";
            window.location.href="inicio.html"
            break;
        }
    }
    alert(mensagem);
}