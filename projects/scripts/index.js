const content = document.querySelector('.content');
const arrowIcon = document.getElementById('down-arrow');
const projectTitle = document.getElementById('proj-title');
const projectLinks = document.querySelectorAll('.project-link');

window.addEventListener('load', () => {
  content.classList.add('appear');
});

function linkHandler() {
  arrowIcon.classList.toggle('arrow-active');
  projectLinks.forEach((link) => {
    link.classList.toggle('appear');
  });
}

arrowIcon.addEventListener('click', linkHandler);
projectTitle.addEventListener('click', linkHandler);
