function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

function generateAvatar() {
  const name = document.getElementById('nameInput').value || 'PEDRO';
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
  document.getElementById('avatar').src = avatarUrl;
  document.getElementById('userName').textContent = name;
}

function publicar() {
  const texto = document.getElementById('postText').value;
  const imagem = document.getElementById('postImage').files[0];
  const preview = document.getElementById('postPreview');

  const novoPost = document.createElement('div');
  novoPost.className = 'card';
  novoPost.innerHTML = `<p>${texto}</p>`;

  if (imagem) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.style.maxWidth = '100%';
    novoPost.appendChild(img);
  }

  const likeBtn = document.createElement('button');
  likeBtn.textContent = '❤️ Curtir';
  likeBtn.onclick = () => curtir(likeBtn);
  novoPost.appendChild(likeBtn);

  const likeCount = document.createElement('span');
  likeCount.className = 'likes';
  likeCount.textContent = '0';
  novoPost.appendChild(likeCount);

  document.getElementById('feed').prepend(novoPost);
  preview.innerHTML = '';
  document.getElementById('notifCount').textContent =
    parseInt(document.getElementById('notifCount').textContent) + 1;
}

function curtir(btn) {
  const countSpan = btn.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  countSpan.textContent = count + 1;
}

function abrirTikTok() {
  window.open("https://www.tiktok.com", "_blank");
}

window.onload = () => {
  generateAvatar();
};
