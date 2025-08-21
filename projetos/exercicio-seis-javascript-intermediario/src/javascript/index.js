const accordions = document.querySelectorAll('.faq');

accordions.forEach(faq => {
    faq.addEventListener('click', () => {
        accordions.forEach(item => {
            const resposta = item.querySelector('.resposta');
            resposta.classList.remove('active');
        });

        const resposta = faq.querySelector('.resposta');
        resposta.classList.add('active');
    });
});