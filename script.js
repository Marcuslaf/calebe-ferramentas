// ano dinâmico
document.getElementById('ano').textContent = new Date().getFullYear();

// suavizar scroll do CTA interno
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
    });
});