// Selecione todas as opções do menu
const options = document.querySelectorAll('.option');

// Adicione um ouvinte de eventos de clique a cada opção
options.forEach((option, index) => {
    option.addEventListener('click', () => {
        // Remova a classe "select" de todas as opções
        options.forEach(opt => {
            opt.classList.remove('select');
        });

        // Adicione a classe "select" apenas à opção clicada
        option.classList.add('select');

        // Exiba o conteúdo correspondente com base no índice da opção
        const contents = document.querySelectorAll('.contents > section');
        contents.forEach(content => {
            content.style.display = 'none';
        });
        contents[index].style.display = 'block';
    });
});
