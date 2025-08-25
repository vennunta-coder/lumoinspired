function aplicarTema() {
  const hora = new Date().getHours();
  if (hora >= 6 && hora < 18) {
    document.body.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
  } else {
    document.body.style.background = "linear-gradient(to right, #0f0c29, #302b63, #24243e)";
  }
}

aplicarTema();
