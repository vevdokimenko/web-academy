const slideShow = document.querySelector('.slide-show');
const slides = document.querySelectorAll('.slide-show__slide');
const [prevBtn, nextBtn] = document.querySelectorAll('.slide-show__control');
console.log(prevBtn, nextBtn);
let intervalId;
let activeSlideIndex = 0;

const showSlide = () => {
  slides[activeSlideIndex].classList.add('active');
};
const hideSlide = () => {
  slides[activeSlideIndex].classList.remove('active');
};

const decreaseIndex = () => {
  if (activeSlideIndex - 1 < 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex -= 1;
  }
  console.log(activeSlideIndex);
};

const increaseIndex = () => {
  if (activeSlideIndex + 1 < slides.length) {
    activeSlideIndex += 1;
  } else {
    activeSlideIndex = 0;
  }
  console.log(activeSlideIndex);
};

const showPrev = () => {
  hideSlide();
  decreaseIndex();
  showSlide();
};

const showNext = () => {
  hideSlide();
  increaseIndex();
  showSlide();
};

const startSlideshow = () => {
  intervalId = setInterval(showNext, 2000);
};

const stopSlideshow = () => {
  clearInterval(intervalId);
};

showSlide();
startSlideshow();
4;

slideShow.addEventListener('mouseenter', () => {
  stopSlideshow();
});

slideShow.addEventListener('mouseleave', () => {
  startSlideshow();
});
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
