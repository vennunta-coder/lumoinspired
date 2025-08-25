// script.js — Funções básicas da interface

// 1. Gerar Avatar com AI (usando Multiavatar API)
function gerarAvatar() {
  const container = document.getElementById("avatar-container");
  const avatar = document.createElement("img");
  const id = Math.floor(Math.random() * 1000); // ID aleatório para avatar
  avatar.src = `https://api.multiavatar.com/${id}.png`;
  avatar.alt = "Avatar AI";
  avatar.style.width = "100px";
  avatar.style.borderRadius = "50%";
  avatar.style.boxShadow = "0 0 10px #00f0ff";
  container.innerHTML = ""; // Limpa o anterior
  container.appendChild(avatar);
}
