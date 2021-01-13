/* mostrar menu */
const showmenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showmenu('nav-toggle', 'nav-menu')

// remove menu mobile

const navlink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

// Scroll section ACTIVE LINK

const sections = document.querySelector('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}


window.addEventListener('scroll', scrollActive)

// Change Background Header

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Show scrolltop

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// Mixup filter portafolio
const mixer = mixitup('.portafolio_container', {
    selectores: {
        target: '.portafolio_content'
    },
    animación: {
        duración: 400
    }
});

// Link actvive portafolio
const linkPortafolio = document.querySelectorAll('.portafolio_item')

function activePortafolio() {
    if (linkPortafolio) {
        linkPortafolio.forEach(L => l.classList.remove('active-portafolio'))
        this.classList.add('active-portafolio')
    }
}

linkPortafolio.forEach(L => l.addEventListener('click', activePortafolio))

// Swimper Carousel

const mySwiper = new Swiper('.testimonio_container', {

    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },


    }


})