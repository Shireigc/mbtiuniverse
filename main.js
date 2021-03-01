/* Affichage des 3 barres de la Navbar sur mobile */

const toggleButton = document.getElementsByClassName('navToggleButton')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})