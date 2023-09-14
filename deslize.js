document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe "deslize"
    const elementosDeslize = document.querySelectorAll('.deslize');
    
    // Adiciona uma classe adicional para ativar a animação
    elementosDeslize.forEach(elemento => {
        elemento.classList.add('animated');
    });
});
