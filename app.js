// picture modal
const photos = document.querySelectorAll('.photoss');
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

photos.forEach(photo => {
  photo.addEventListener('click', event => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
  });
});

span.onclick = function () {
  modal.classList.add('closed');
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove('closed');
  }, 200);
};


/*  dynamic notice */

const allA = document.querySelectorAll(".notice-a");
const mainDiv = document.getElementById('notic-container');
const marquee = document.createElement('marquee');
marquee.setAttribute("direction", "up");
marquee.setAttribute("onmouseover", "this.stop();");
marquee.setAttribute("onmouseout", "this.start();");
marquee.classList.add('mb-3', 'px-2', 'py-3', 'limited-tags', 'scrolling-hide');

allA.forEach((a) => {
  a.classList.remove('notice-a');
  a.classList.add('bg-white', 'mb-2', 'p-3');
  marquee.innerHTML += ` <a href="${a.href}" class="${a.classList}">${a.innerText}</a>`;
});

mainDiv.appendChild(marquee);

// onmouseover="this.stop();" onmouseout="this.start();"
