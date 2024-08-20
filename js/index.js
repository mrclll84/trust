const menues = Array.from(document.querySelectorAll('.nav-list__menu'));
const headerMenu = document.querySelector('.header-menu');
const allHide = document.querySelector('.all-hide');

for (const menu of menues) {
    menu.addEventListener('mouseout', event => {
        console.log(event, 'mouseout')
        headerMenu.classList.remove('open')
        allHide.classList.remove('open')
    })
    menu.addEventListener('mouseover', event => {
        console.log(event, 'mouseover')
        headerMenu.classList.add('open')
        allHide.classList.add('open')
    })
}

headerMenu.addEventListener('mouseover', event => {
    headerMenu.classList.add('open')
    allHide.classList.add('open')
})

headerMenu.addEventListener('mouseout', event => {
    headerMenu.classList.remove('open')
    allHide.classList.remove('open')
})