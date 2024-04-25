document.querySelector('.botoes-quem-somos a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
})
document.querySelector('.botoes-servicos a').forEach(item => {
    item.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});
})
