document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nomeCompleto = registerForm.querySelector('input[placeholder="Nome Completo"]').value;
        const email = registerForm.querySelector('input[placeholder="Email"]').value;
        const telefone = registerForm.querySelector('input[placeholder="Telefone"]').value;
        const pais = registerForm.querySelector('input[placeholder="País"]').value;
        const estado = registerForm.querySelector('input[placeholder="Estado"]').value;
        const cidade = registerForm.querySelector('input[placeholder="Cidade"]').value;
        const cep = registerForm.querySelector('input[placeholder="CEP"]').value;
        const senha = registerForm.querySelector('input[placeholder="Senha"]').value;
        const confirmarSenha = registerForm.querySelector('input[placeholder="Confirmar Senha"]').value;

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        console.log({
            nomeCompleto,
            email,
            telefone,
            pais,
            estado,
            cidade,
            cep,
            senha
        });

    });
});
