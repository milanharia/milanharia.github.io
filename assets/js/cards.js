document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const workCardContainer = document.getElementById('work-card-container');
const circle = document.querySelector('.circle');
const progressBubbles = document.querySelectorAll('.progress-bubble');

let currentCard = 0;

const cards = [
  [
    `
    <div class="work-info-container">
      <h1>Morrison's Scan and Shop</h1>
      <h4>MOBILE APPLICATION</h4>
      <p>2021</p>
      <a href='projects/morrisons-scan-and-shop.html'>View Project</a>
    </div>
    <div class="work-preview-container">
      <img src="./assets/images/projects/morrisons-scan-and-shop-mobile.png" alt="Morrisons scan and shop preview" />
    </div>
  `,
  ],
  [
    `
    <div class="work-info-container">
      <h1>Powley Pharma Quizzer</h1>
      <h4>WEBSITE</h4>
      <p>2020</p>
      <a href='projects/powley-pharma-quizzer.html'>View Project</a>
    </div>
    <div class="work-preview-container">
      <img src="./assets/images/projects/powley-pharma-web.png" alt="Morrisons scan and shop preview" />
    </div>
`,
  ],
  [
    `
  <div class="work-info-container">
    <h1>Powley Pharma Quizzer v2</h1>
    <h4>MOBILE APPLICATION</h4>
    <p>2021</p>
    <a href='projects/powley-pharma-quizzer-v2.html'>View Project</a>
  </div>
  <div class="work-preview-container">
    <img src="./assets/images/projects/powley-pharma-mobile.png" alt="Morrisons scan and shop preview" />
  </div>
  `,
  ],
];

workCardContainer.innerHTML = cards[currentCard];

const prevArrowHandler = () => {
  workCardContainer.classList.add('hide');
  circle.classList.add('hide');
  progressBubbles.forEach((bubble) => {
    if (bubble.classList.contains('selected')) {
      bubble.classList.remove('selected');
    }
  });
  setTimeout(() => {
    if (currentCard === 0) {
      currentCard = cards.length - 1;
    } else {
      currentCard--;
    }
    workCardContainer.innerHTML = cards[currentCard];
    workCardContainer.classList.remove('hide');
    circle.classList.remove('hide');
    progressBubbles[currentCard].classList.add('selected');
  }, 850);
};
const nextArrowHandler = () => {
  workCardContainer.classList.add('hide');
  circle.classList.add('hide');
  progressBubbles.forEach((bubble) => {
    if (bubble.classList.contains('selected')) {
      bubble.classList.remove('selected');
    }
  });
  setTimeout(() => {
    if (currentCard === cards.length - 1) {
      currentCard = 0;
    } else {
      currentCard++;
    }
    workCardContainer.innerHTML = cards[currentCard];
    workCardContainer.classList.remove('hide');
    circle.classList.remove('hide');
    progressBubbles[currentCard].classList.add('selected');
  }, 850);
};

prevArrow.addEventListener('click', prevArrowHandler);
nextArrow.addEventListener('click', nextArrowHandler);
