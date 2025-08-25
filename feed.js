let feed = document.getElementById("feed");

function carregarPosts() {
  for (let i = 0; i < 5; i++) {
    let post = document.createElement("div");
    post.className = "post";
    post.innerText = "Post #" + Math.floor(Math.random() * 1000);
    post.style.marginBottom = "20px";
    feed.appendChild(post);
  }
}

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    carregarPosts();
  }
};

carregarPosts();
