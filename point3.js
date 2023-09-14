// Seleciona todos os elementos com as classes "point1" e "pointer1"
const points3 = document.querySelectorAll('.point3');
const pointers3 = document.querySelectorAll('.pointer3');

// Cria uma função que será chamada quando os elementos estiverem visíveis no viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicione a classe "active" aos elementos com a classe "point"
            points3.forEach(point3 => {
                point3.classList.add('select');
            });

            // Adicione a classe "active" aos elementos com a classe "pointer"
            pointers3.forEach(pointer3 => {
                pointer3.classList.add('select');
            });
        } else {
            // Remova a classe "active" dos elementos com a classe "point"
            points3.forEach(point3 => {
                point3.classList.remove('select');
            });

            // Remova a classe "active" dos elementos com a classe "pointer"
            pointers3.forEach(pointer3 => {
                pointer3.classList.remove('select');
            });
        }
    });
}

// Crie um Intersection Observer para observar os elementos
const traject3 = new IntersectionObserver(handleIntersection);

// Comece a observar os elementos com a classe "point" e "pointer"
points3.forEach(point3 => {
    traject3.observe(point3);
});
