// Seleciona todos os elementos com as classes "point1" e "pointer1"
const points2 = document.querySelectorAll('.point2');
const pointers2 = document.querySelectorAll('.pointer2');

// Cria uma função que será chamada quando os elementos estiverem visíveis no viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adicione a classe "active" aos elementos com a classe "point"
            points2.forEach(point2 => {
                point2.classList.add('select');
            });

            // Adicione a classe "active" aos elementos com a classe "pointer"
            pointers2.forEach(pointer2 => {
                pointer2.classList.add('select');
            });
        } else {
            // Remova a classe "active" dos elementos com a classe "point"
            points2.forEach(point2 => {
                point2.classList.remove('select');
            });

            // Remova a classe "active" dos elementos com a classe "pointer"
            pointers2.forEach(pointer2 => {
                pointer2.classList.remove('select');
            });
        }
    });
}

// Crie um Intersection Observer para observar os elementos
const traject2 = new IntersectionObserver(handleIntersection);

// Comece a observar os elementos com a classe "point" e "pointer"
points2.forEach(point2 => {
    traject2.observe(point2);
});
