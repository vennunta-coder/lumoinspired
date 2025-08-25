// theme.js — Tema dinâmico baseado na hora do dia

function aplicarTema() {
  const hora = new Date().getHours();

  if (hora >= 6 && hora < 12) {
    // Manhã: tons claros e energéticos
    document.body.style.background = "linear-gradient(to right, #fceabb, #f8b500)";
  } else if (hora >= 12 && hora < 18) {
    // Tarde: tons vibrantes e criativos
    document.body.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
  } else if (hora >= 18 && hora < 21) {
    // Entardecer: tons quentes e suaves
    document.body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";
  } else {
    // Noite: visual escuro e futurista
    document.body.style.background = "linear-gradient(to right, #0f0c29, #302b63, #24243e)";
  }
}

// Aplica o tema ao carregar a página
aplicarTema();
