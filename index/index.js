
function js1() {

     var usuario = document.querySelector('#usuario').value;
     var senha = document.querySelector('#senha').value;
    //conições do botão
    if (usuario == '' || usuario != "Dieimison") {
        alert('Usuario inválido, tente novamente!');
    } else if (senha == '' || senha != "oab123") {
        alert('Senha incorreta, tente novamente!');
    } else {
        alert('Olá! Seja bem-vindo(a) a minha Proposta de intervenção');
        window.location.href = '../Introdução/Introdução.html';
    }
}


