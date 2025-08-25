// feed.js — Feed vertical com scroll infinito

const feed = document.getElementById("feed");

// 1. Gera posts simulados
function carregarPosts() {
  for (let i = 0; i < 5; i++) {
    const post = document.createElement("div");
    post.className = "post";

    // Conteúdo do post
    const numero = Math.floor(Math.random() * 1000);
    const texto = `Post #${numero}`;
    const comentarioAI = gerarComentarioParaPost(texto); // função do ai.js

    post.innerHTML = `
      <h3>${texto}</h3>
      <p>Comentário do Copiloto: <em>${comentarioAI}</em></p>
    `;

    feed.appendChild(post);
  }
}

// 2. Detecta scroll para carregar mais posts
window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    carregarPosts();
  }
};

// 3. Inicializa o feed ao carregar a página
carregarPosts();
