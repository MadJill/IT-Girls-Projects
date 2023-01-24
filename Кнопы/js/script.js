const burger = document.querySelector('.header__burger');
const smooth  = document.querySelector('.header__smooth');
const menu = document.querySelector('.header__menu')



window.addEventListener('click' , (e) => {
    if((e.target == burger || e.target.className === 'block') && burger.classList.contains('header__burger_active') ) {
        closeMenu()
    } else if ((e.target == burger || e.target.className === 'block') && !burger.classList.contains('header__burger_active')) {
        openMenu()
    } else if (e.target == smooth) {
        closeMenu()
    } else {
        console.log(e.target);
    }
})

const openMenu = (e) => {
    smooth.classList.add('header__smooth_active')
    burger.classList.add('header__burger_active')
    menu.classList.add('header__menu_active')
    document.body.style.overflowY = 'hidden'
}

const closeMenu = () => {
    burger.classList.remove('header__burger_active')
    menu.classList.remove('header__menu_active')
    smooth.classList.remove('header__smooth_active')
    document.body.style.overflowY = 'scroll'
}
