@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: linear-gradient(to top right, #ffdde1, #ee9ca7);
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
  position: relative;
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  color: #b30059;
  max-width: 600px;
  margin: auto;
}

h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 3em;
  margin-bottom: 10px;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

button {
  background: #ff69b4;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-color: #d6336c;
  transform: scale(1.05);
}

.mensagem {
  margin-top: 20px;
  font-size: 1.4em;
  font-weight: bold;
  color: #8b005d;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.mensagem.mostrar {
  opacity: 1;
}

/* Corações animados */
.heart-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.heart {
  position: absolute;
  color: red;
  font-size: 20px;
  animation: flutuar 8s linear infinite;
  opacity: 0.7;
}

@keyframes flutuar {
  0% {
    transform: translateY(100vh) scale(0.8) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-10vh) scale(1.2) rotate(360deg);
    opacity: 0;
  }
}
