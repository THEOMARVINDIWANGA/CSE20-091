const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navList.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navList.classList.remove('show');
    menuOpen = false;
  }
});