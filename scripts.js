function abrirCarta() {
  document.getElementById('mensagem').style.display = 'block';
  dispararFogos();
}

// Efeito de fogos simples com partículas
const canvas = document.getElementById('fogosCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulas = [];

function criarParticulas(x, y) {
  for (let i = 0; i < 40; i++) {
    particulas.push({
      x,
      y,
      radius: Math.random() * 4 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      speedX: (Math.random() - 0.5) * 6,
      speedY: (Math.random() - 0.5) * 6,
      alpha: 1
    });
  }
}

function animarFogos() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particulas.forEach((p, index) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.01;

    if (p.alpha <= 0) {
      particulas.splice(index, 1);
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  requestAnimationFrame(animarFogos);
}

function dispararFogos() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  criarParticulas(x, y);
}

animarFogos();
