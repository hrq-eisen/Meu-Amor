function mostrarMensagem() {
  const msg = document.getElementById("mensagem");
  msg.style.display = "block";
}

// Criar corações flutuantes
const heartsContainer = document.querySelector(".hearts");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(criarCoracao, 300);
