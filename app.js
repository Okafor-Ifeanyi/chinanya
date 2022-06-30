const hamburger = document.querySelector(".header .nav-bar .hambuger")
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul")
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list li a")
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
}) 

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 180){
        header.style.backgroundColor = 'rgb(31,31,62)';
    } else {
        header.style.backgroundColor = 'transparent';
        // header.style.opacity = '.8'

    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});