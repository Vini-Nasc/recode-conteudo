function filtrar(categoria) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (categoria === 'todos' || card.classList.contains(categoria)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
