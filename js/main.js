const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBody.classList.toggle('_active');
      iconMenu.classList.toggle('_active');
      iconMenu.classList.toggle('_menu-open');
      })
}

let menulinks = document.querySelectorAll('.menu__link[data-goto]')
if (menulinks.length > 0) {
   menulinks.forEach(menulinks => {
      menulinks.addEventListener("click", onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            menuBody.classList.remove('_active');
            iconMenu.classList.remove('_active');
            iconMenu.classList.remove('_menu-open');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
      }
   }
}