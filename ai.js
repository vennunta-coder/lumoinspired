function recomendarConteudo() {
  const hora = new Date().getHours();
  if (hora >= 6 && hora < 12) return "☀️ Bom dia! Que tal um post motivacional?";
  if (hora >= 12 && hora < 18) return "🎨 Hora de explorar algo criativo!";
  return "🌙 Relaxar à noite com vídeos curtos? Aqui vão sugestões...";
}

function comentarAutomaticamente(post) {
  const respostas = [
    "🔥 Isso está incrível!",
    "💡 Adorei essa ideia!",
    "🎯 Super relevante!",
    "😎 Estilo puro!"
  ];
  const aleatorio = Math.floor(Math.random() * respostas.length);
  return respostas[aleatorio];
}
