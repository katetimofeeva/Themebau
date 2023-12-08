const btnMainMenus = document.querySelectorAll('.burger')
const moduleMenu = document.querySelector('.modalMenu')

btnMainMenus.forEach((btn) =>
    btn.addEventListener('click', () => {
        console.log('click')
        moduleMenu.classList.toggle('show-menu')
    }),
)
