// This code is removing the scroll effect of the body of the html page when a popup is active
var body = document.body;
var popupBtns = document.querySelectorAll('.js--popup-btn');
var btns = document.querySelectorAll('.btn');

popupBtns.forEach(btn => {
    btn.onclick = e => {
        body.classList.toggle('noscroll');
    }
}) 
//////////////////////////////////////////////////////////////////////////////////////////////////


// This is changing the color of the nav items from transparent to white on scroll
window.onscroll = function() {changeNavColor()};

function changeNavColor() {
  const navItems = Array.from(document.querySelectorAll('.js--nav'));
  const woodward = document.querySelector('.js--nav-woodward');  

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navItems.forEach(item => item.classList = 'nav__item nav__item--basic nav__item--basic-white dropdown js--nav');
    woodward.classList = 'nav__item nav__item--woodward nav__item--woodward-white dropdown js--nav-woodward';
  } else {
    navItems.forEach(item => item.classList = 'nav__item nav__item--basic dropdown js--nav');
    woodward.classList = 'nav__item nav__item--woodward dropdown js--nav-woodward';
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////