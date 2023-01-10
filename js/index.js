const animItems = document.querySelectorAll('.anim-items');
const buttonBurger = document.querySelector(".menu")
const adaptiveMenu = document.querySelector(".menu-column__menu")
const signUpButton = document.querySelector('.menu-column__sign-up')
const signUpExit = document.querySelector('.auth-menu__exit')
const signUpMenu = document.querySelector('.auth-menu')


signUpButton.addEventListener("click", function(){
    signUpMenu.classList.add('_open');
    console.log('Лло')
})
signUpExit.addEventListener("click", function(){
    signUpMenu.classList.toggle('_open');
})



buttonBurger.addEventListener("click", function(){
    buttonBurger.classList.toggle('open')
    adaptiveMenu.classList.toggle('active')
})
window.addEventListener('scroll', function (e){
    if (window.scrollY >= 300){
        buttonBurger.classList.remove('open')
        adaptiveMenu.classList.remove('active')
    }
})

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top
            const animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else{
                if(!animItem.classList.contains('none-anim-again')){
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(animOnScroll, 100)
}

new Swiper('.swiper', {
    pagination: {
    el: '.swiper-pagination',
    },
})


const paralaxBottom = document.querySelector('.youguide')
const introductionTitle = document.querySelector('.introduction__title')
const paralaxTitle = document.querySelector('.youguide__title')


window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    document.body.style.cssText += `--offsetTop: ${paralaxBottom.offsetTop}px`
    if (paralaxBottom.offsetTop <= window.pageYOffset){
        paralaxTitle.classList.add('bottom')
    } else if (paralaxBottom.offsetTop > window.pageYOffset){
        paralaxTitle.classList.remove('bottom')
    }
})

