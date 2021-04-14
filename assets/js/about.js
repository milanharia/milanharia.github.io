const aboutContainer = document.querySelector('.about-me-container');

function scrollAppear() {
  const skillsContainer = document.querySelector('.skills-container');
  const experienceContainer = document.querySelector('.experience-container');

  const skillsContainerPosition = skillsContainer.getBoundingClientRect().top;
  const experienceContainerPosition = experienceContainer.getBoundingClientRect()
    .top;
  const screenPosition = window.innerHeight / 1.3;

  if (skillsContainerPosition < screenPosition) {
    skillsContainer.classList.add('appear');
  }

  if (experienceContainerPosition < screenPosition) {
    experienceContainer.classList.add('appear');
  }
}

window.addEventListener('scroll', scrollAppear);
window.addEventListener('load', () => {
  aboutContainer.classList.add('appear');
});
