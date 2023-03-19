
const thumbnails = document.querySelectorAll('.img-thumbnail');
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', event => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
  });
});

span.onclick = function() { 
  modal.classList.add('closed');
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove('closed');
  }, 200); // delay the removal of the "closed" class to give time for the CSS transition
};