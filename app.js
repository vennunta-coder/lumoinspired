// ===== LUMO INSPIRED - app.js =====

// Alternar Tabs com Fade
const tabButtons = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
  contents.forEach(c => {
    if (c.id === `tab-${tabId}`) {
      c.style.opacity = 0;
      c.style.display = 'block';
      setTimeout(() => c.style.opacity = 1, 50);
    } else {
      c.style.opacity = 0;
      setTimeout(() => c.style.display = 'none', 300);
    }
  });
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    switchTab(btn.dataset.tab);
  });
});

// Controlo de Som com Animação
const video = document.getElementById('main-video');
const soundHint = document.getElementById('sound-hint');
const toggleBtn = document.getElementById('toggle-sound');

function showSoundControls() {
  soundHint.style.opacity = 0;
  setTimeout(() => soundHint.style.display = 'none', 300);
  toggleBtn.style.display = 'inline-block';
  toggleBtn.style.opacity = 0;
  setTimeout(() => toggleBtn.style.opacity = 1, 50);
  toggleBtn.textContent = video.muted ? 'Ligar som' : 'Desligar som';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    video.muted = false;
    video.play();
    showSoundControls();
    toggleBtn.classList.add('pulse');
    setTimeout(() => toggleBtn.classList.remove('pulse'), 600);
  }
});

toggleBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  toggleBtn.textContent = video.muted ? 'Ligar som' : 'Desligar som';
  toggleBtn.classList.add('pulse');
  setTimeout(() => toggleBtn.classList.remove('pulse'), 600);
});

// Inicialização
(function initLumo() {
  const activeTab = document.querySelector('.tab.active')?.dataset.tab;
  if (activeTab) switchTab(activeTab);
  video.muted = true;
})();
