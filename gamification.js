// gamification.js — Sistema de convites com pontuação

let pontos = 0;

// 1. Função para convidar amigo
function convidarAmigo() {
  pontos += 10;

  // Feedback visual
  alert(`🎉 Convite enviado com sucesso!\nGanhaste 10 pontos.\nTotal de pontos: ${pontos}`);

  // Futuro: desbloquear funcionalidades com base nos pontos
  if (pontos >= 50) {
    console.log("🚀 Funcionalidade especial desbloqueada!");
    // Aqui poderíamos ativar um modo criador, tema exclusivo, etc.
  }
}
