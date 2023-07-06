function validarUsuario(){

event.preventDefault();

const emailInpunt = document.getElementById('input-text').value;
const senhaInput = document.getElementById('input-senha'). value;

    if (emailInpunt == 'andersonlp2328@gmail.com' && senhaInput == 123456) {
        alert('Usuário e senha corretos');
    }

    else {
        alert('Usuário e senha incorretos! ');
    };
};