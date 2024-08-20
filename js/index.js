const menues = Array.from(document.querySelectorAll('.nav-list__menu')) || [];
const headerMenu = document.querySelector('.header-menu');
const allHide = document.querySelector('.all-hide');
const hamburger = document.querySelector('.hamburger');
const miniMenu = document.querySelector('.mini-header');
const miniMenues = Array.from(document.querySelectorAll('.header-menu__content')) || []

for (const menu of menues) {
    menu.addEventListener('mouseover', event => {
        const id = event.target.dataset.id;

        headerMenu.classList.add('open')
        allHide.classList.add('open')

        const el  = document.querySelector(`.header-menu__content[data-id="${id}"]`)

        if (el) {
            for (const m of miniMenues) {
                m.classList.remove('show')
            }
            el.classList.add('show')
        }
    })
}

headerMenu.addEventListener('mouseover', event => {
    headerMenu.classList.add('open')
    allHide.classList.add('open')
})


window.addEventListener('mouseover', event => {

    if (!event.target.closest('.header')) {
        for (const m of miniMenues) {
            m.classList.remove('show')
        }
        headerMenu.classList.remove('open')
        allHide.classList.remove('open')
    }
})

hamburger.addEventListener('click', event => {
    hamburger.classList.toggle('is-active')
    miniMenu.classList.toggle('is-active')

    if (hamburger.classList.contains('is-active')) {
        document.querySelector('body').style.overflowY = 'hidden'
    }
    else {
        document.querySelector('body').style.overflowY = ''
    }
})

