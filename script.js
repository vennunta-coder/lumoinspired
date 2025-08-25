function gerarAvatar() {
  const container = document.getElementById("avatar-container");
  const avatar = document.createElement("img");
  avatar.src = "https://api.multiavatar.com/" + Math.floor(Math.random() * 1000) + ".png";
  avatar.style.width = "100px";
  avatar.style.borderRadius = "50%";
  container.innerHTML = "";
  container.appendChild(avatar);
}
