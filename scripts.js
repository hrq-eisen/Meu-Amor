function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.classList.add("mostrar");
}

// Função para criar corações flutuantes
const container = document.querySelector(".heart-container");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 16) + "px";
  heart.style.animationDuration = (5 + Math.random() * 3) + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(criarCoracao, 300);
