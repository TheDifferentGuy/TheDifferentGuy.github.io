const menuBody = document.querySelector('.menu__body')
const menuIcon = document.querySelector('.menu__icon')

if (menuBody && menuIcon) {
   menuIcon.addEventListener("click", function (e) {
      menuBody.classList.toggle('_active')
      menuIcon.classList.toggle('_active')
      document.body.classList.toggle('_lock')
   })

   menuBody.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', function (e) {
         menuBody.classList.remove('_active')
         menuIcon.classList.remove('_active')
         document.body.classList.remove('_lock')
      })
   })
}



const anchors = document.querySelectorAll('a[href*="#"]')


anchors.forEach(anchor => {
   anchor.addEventListener('click', event => {
      event.preventDefault()

      const blokID = anchor.getAttribute('href').substring(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})