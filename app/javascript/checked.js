function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
<<<<<<< Updated upstream
    if (post.getAttribute("date-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.setAttribute("date-load", "true");
    post.addEventListener("click", () => {
      const postId = post.getAttribute("date-id");
=======
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
>>>>>>> Stashed changes
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
<<<<<<< Updated upstream
          return null;
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("date-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("date-check");
=======
          return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
>>>>>>> Stashed changes
        }
      };
    });
  });
}
setInterval(check, 1000);