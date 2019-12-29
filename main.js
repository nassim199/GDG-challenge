const countDownElement = document.getElementById('count-down');

const animation = document.querySelector('.hide-animation');

const button = document.querySelector('button');

const happyNewYear = document.querySelector('.happy-new-year');


function animate() {
    happyNewYear.classList.add('animated', 'bounceIn');
    animation.classList.remove('hide-animation');
}
button.addEventListener('click', animate);

happyNewYear.addEventListener('animationend', () => {
    happyNewYear.classList.remove('animated', 'bounceIn');
});

const countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();


// Update the count down every 1 second
let x = setInterval(() => {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  countDownElement.innerHTML = `${days<10 ? '0' : ''}${days} : ${hours<10 ? '0' : ''}${hours}
   : ${minutes<10 ? '0' : ''}${minutes} : ${seconds<10 ? '0' : ''}${seconds}`;

  // If the count down is finished, write some text
  if (distance < 1) {
    clearInterval(x);
    animate();
  }
}, 1000);

//slide show

var show = false;

const slidesVisible = document.querySelector('#memories');

slidesVisible.addEventListener('click', _ => {
  document.querySelector('.slideshow-container').classList.add('show');
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}