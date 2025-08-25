function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

function generateAvatar() {
  const name = document.getElementById('nameInput').value || 'PEDRO';
  const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(name)}`;
  document.getElementById('avatar').src = avatarUrl;
  document.getElementById('userName').textContent = name;
}

// Gera avatar inicial
window.onload = () => {
  generateAvatar();
};
