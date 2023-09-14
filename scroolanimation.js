const animations = document.querySelectorAll('.animation');

window.addEventListener('scroll', checkAnimations);

checkAnimations();

function checkAnimations() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    animations.forEach((animation) => {
        const animationTop = animation.getBoundingClientRect().top;

        if (animationTop < triggerBottom) {
            animation.classList.add('show');
        } else {
            animation.classList.remove('show');
        }
    });
}
