document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeCompleto = contactForm.querySelector('input[placeholder="Nome Completo"]').value;
        const email = contactForm.querySelector('input[placeholder="Email"]').value;
        const telefone = contactForm.querySelector('input[placeholder="Telefone"]').value;
        const assunto = contactForm.querySelector('input[placeholder="Assunto"]').value;
        const mensagem = contactForm.querySelector('textarea[placeholder="Mensagem"]').value;

        console.log({
            nomeCompleto,
            email,
            telefone,
            assunto,
            mensagem
        });

        alert('Formulário enviado com sucesso!');
    });
});
