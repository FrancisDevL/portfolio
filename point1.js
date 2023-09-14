// Seleciona todos os elementos com as classes "point1" e "pointer1"
const points1 = document.querySelectorAll('.point1');
const pointers1 = document.querySelectorAll('.pointer1');

// Cria uma função que será chamada quando os elementos estiverem visíveis no viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicione a classe "active" aos elementos com a classe "point"
            points1.forEach(point1 => {
                point1.classList.add('select');
            });

            // Adicione a classe "active" aos elementos com a classe "pointer"
            pointers1.forEach(pointer1 => {
                pointer1.classList.add('select');
            });
        } else {
            // Remova a classe "active" dos elementos com a classe "point"
            points1.forEach(point1 => {
                point1.classList.remove('select');
            });

            // Remova a classe "active" dos elementos com a classe "pointer"
            pointers1.forEach(pointer1 => {
                pointer1.classList.remove('select');
            });
        }
    });
}

// Crie um Intersection Observer para observar os elementos
const traject1 = new IntersectionObserver(handleIntersection);

// Comece a observar os elementos com a classe "point" e "pointer"
points1.forEach(point1 => {
    traject1.observe(point1);
});



