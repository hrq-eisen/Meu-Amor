document.getElementById('card').addEventListener('click', () => {
    const heartContainer = document.getElementById('hearts');

    // Limpa corações antigos
    heartContainer.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 20 + 10; // tamanho dos corações
        const duration = Math.random() * 2 + 1; // duração da animação

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.animation = `explode ${duration}s forwards`;

        heartContainer.appendChild(heart);

        // Remove o coração do DOM após a animação
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
});
