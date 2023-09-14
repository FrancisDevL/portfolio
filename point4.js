// Seleciona todos os elementos com as classes "point1" e "pointer1"
const points4 = document.querySelectorAll('.point4');
const pointers4 = document.querySelectorAll('.pointer4');

// Cria uma função que será chamada quando os elementos estiverem visíveis no viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicione a classe "active" aos elementos com a classe "point"
            points4.forEach(point4 => {
                point4.classList.add('select');
            });

            // Adicione a classe "active" aos elementos com a classe "pointer"
            pointers4.forEach(pointer4 => {
                pointer4.classList.add('select');
            });
        } else {
            // Remova a classe "active" dos elementos com a classe "point"
            points4.forEach(point4 => {
                point4.classList.remove('select');
            });

            // Remova a classe "active" dos elementos com a classe "pointer"
            pointers4.forEach(pointer4 => {
                pointer4.classList.remove('select');
            });
        }
    });
}

// Crie um Intersection Observer para observar os elementos
const traject4 = new IntersectionObserver(handleIntersection);

// Comece a observar os elementos com a classe "point" e "pointer"
points4.forEach(point4 => {
    traject4.observe(point4);
});
