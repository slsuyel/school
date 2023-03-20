
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

span.onclick = function() { 
  modal.classList.add('closed');
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove('closed');
  }, 200); // delay the removal of the "closed" class to give time for the CSS transition
};
// 
const limitedTags = document.querySelector('.limited-tags');
const maxScrollTop = limitedTags.scrollHeight - limitedTags.clientHeight;
let currentScrollTop = 0;
const scrollIncrement = 1;
const scrollInterval = 30;
let scrollIntervalId;

function startScrolling() {
  scrollIntervalId = setInterval(() => {
    currentScrollTop += scrollIncrement;
    if (currentScrollTop >= maxScrollTop) {
      currentScrollTop = 0;
    }
    limitedTags.scrollTop = currentScrollTop;
  }, scrollInterval);
}

startScrolling();

limitedTags.addEventListener('mouseover', () => {
  clearInterval(scrollIntervalId);
});

limitedTags.addEventListener('mouseout', () => {
  startScrolling();
});

/*  dynamic notice */
