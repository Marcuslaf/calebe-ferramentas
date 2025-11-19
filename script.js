// Ano dinâmico
document.getElementById('ano').textContent = new Date().getFullYear();

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// MODAL AMPLIADO
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card img').forEach(img => {
    img.onclick = function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        caption.textContent = this.closest('.card').querySelector('h3').textContent;
        document.body.style.overflow = 'hidden';
    }
});

closeBtn.onclick = fecharModal;
modal.onclick = function(e) { if (e.target === modal) fecharModal(); };
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });

function fecharModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}