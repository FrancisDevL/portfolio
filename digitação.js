document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true

    }).type('Web', {delay: 150}).delete(3).type('Full-Stack', {delay: 700})
    
    .go()
})