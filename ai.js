// ai.js — Módulos de Inteligência Artificial

// 1. Sugestão de conteúdo com base na hora
function recomendarConteudo() {
  const hora = new Date().getHours();
  if (hora >= 6 && hora < 12) {
    return "☀️ Bom dia! Que tal um post motivacional?";
  } else if (hora >= 12 && hora < 18) {
    return "🎨 Hora de explorar algo criativo!";
  } else {
    return "🌙 Relaxar à noite com vídeos curtos? Aqui vão sugestões...";
  }
}

// 2. Comentário automático estilo Copiloto Social
function comentarAutomaticamente(postTexto) {
  const respostas = [
    "🔥 Isso está incrível!",
    "💡 Adorei essa ideia!",
    "🎯 Super relevante!",
    "😎 Estilo puro!",
    "📈 Isso vai viralizar!"
  ];
  const aleatorio = Math.floor(Math.random() * respostas.length);
  return respostas[aleatorio];
}

// 3. Exemplo de uso (pode ser chamado no feed.js)
function gerarComentarioParaPost(postTexto) {
  const sugestao = comentarAutomaticamente(postTexto);
  console.log(`Comentário AI para "${postTexto}": ${sugestao}`);
  return sugestao;
}
