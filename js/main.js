let menulinks = document.querySelectorAll('.menu__link[data-goto]')
if (menulinks.length > 0) {
   menulinks.forEach(menulinks => {
      menulinks.addEventListener("click",onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
         
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
      }
   }
}

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body')
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBody.classList.toggle('_active');
      iconMenu.classList.toggle('_active');
      iconMenu.classList.toggle('_menu-open');
      })
}



