var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 9000); // Промяна на снимката на всеки 4 секунди
}

function animateNumber(element, targetNumber, duration) {
  const startNumber = parseFloat(element.innerText); // Започваме от текущата стойност
  const startTime = performance.now();

  function updateNumber(timestamp) {
    const elapsed = timestamp - startTime;
    if (elapsed < duration) {
      const progress = elapsed / duration;
      const currentNumber =
        startNumber + (targetNumber - startNumber) * progress;
      element.innerText = currentNumber.toFixed(1); // Задайте желан брой десетични знаци
      requestAnimationFrame(updateNumber);
    } else {
      element.innerText = targetNumber.toFixed(1); // Задайте желан брой десетични знаци
    }
  }

  requestAnimationFrame(updateNumber);
}

// Намираме всички елементи с клас "animated-number" и анимираме ги
const animatedElements = document.querySelectorAll(".animated-number");
animatedElements.forEach(function (element) {
  const targetNumber = parseFloat(element.getAttribute("data-number"));
  animateNumber(element, targetNumber, 2800); // Променете 4200 на желаната продължителност в милисекунди (4.2 секунди)
});

function toggleMenu(menuNumber) {
  // Създайте масив, който съдържа всички менюта
  const menus = [];
  for (let i = 1; i <= 5; i++) {
    menus.push(document.getElementById(`menu${i}`));
  }

  // Скрийте всички менюта освен избраното
  for (let i = 0; i < menus.length; i++) {
    if (i === menuNumber - 1) {
      menus[i].style.display =
        menus[i].style.display === "none" ? "block" : "none";
    } else {
      menus[i].style.display = "none";
    }
  }
}

showImage("image1");

function showImage(imageId) {
  // Скриваме всички снимки
  var imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach(function (container) {
    container.style.display = "none";
  });

  // Показваме снимката, свързана с избрания бутон
  var selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.style.display = "block";
  }
}
