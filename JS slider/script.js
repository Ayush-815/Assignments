const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const totalSlides = slides.length;
const realSlideCount = totalSlides - 4;// 2 slide clones first ra last ma minus gareko
let currentIndex = 2;// 2 slides aagadi nai clone gareko xa, so firsl slide index = 2
let autoSlide, animationID,startPos = 0,currentTranslate = 0;
const slideWidth = slides[0].clientWidth;
let isDragging = false;
let prevTranslate = -slideWidth * currentIndex;

// Position slides at first real slide
slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
function showSlide(index) {
  slidesContainer.style.transition = "transform 0.8s ease-in-out";
  currentIndex = index;
  slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  prevTranslate = -slideWidth * currentIndex;
}

// Handle infinite loop
slidesContainer.addEventListener("transitionend", () => {
  if (currentIndex >= realSlideCount + 2) {
    slidesContainer.style.transition = "none";
    currentIndex = 2; 
    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    prevTranslate = -slideWidth * currentIndex;
  } else if (currentIndex < 2) {
    slidesContainer.style.transition = "none";
    currentIndex = realSlideCount;
    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    prevTranslate = -slideWidth * currentIndex;
  }
});

function nextSlide() {
  if (isDragging) return;
  showSlide(currentIndex + 1);
}

function prevSlide() {
  if (isDragging) return;
  showSlide(currentIndex - 1);
}
function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextSlide();
  }, 5000);
}
function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Drag functionality
function touchStart(event) {
  isDragging = true;
  startPos = getPositionX(event);
  currentTranslate = prevTranslate;
  cancelAnimationFrame(animationID);
  stopAutoSlide();
  slidesContainer.style.transition = "none";
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
    slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function touchEnd() {
  if (!isDragging) return;
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100) {
    currentIndex += 1;
  } else if (movedBy > 100) {
    currentIndex -= 1;
  }
  showSlide(currentIndex);
  startAutoSlide();
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

// Event Listeners for drag
slidesContainer.addEventListener("mousedown", touchStart);
slidesContainer.addEventListener("mousemove", touchMove);
slidesContainer.addEventListener("mouseup", touchEnd);
slidesContainer.addEventListener("mouseleave", touchEnd);
slidesContainer.addEventListener("touchstart", touchStart);
slidesContainer.addEventListener("touchmove", touchMove);
slidesContainer.addEventListener("touchend", touchEnd);

//Event listener for keyboard left and right key ko lagi
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  } else if (event.key === "ArrowLeft") {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  }
});

// Event Listeners for buttons
nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Prevent image dragging
slides.forEach(slide => {
  slide.querySelector("img").addEventListener("dragstart", (e) => e.preventDefault());
});
startAutoSlide();