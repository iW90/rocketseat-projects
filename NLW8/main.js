// Eventos de scroll
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

// Ativar item na navbar conforme altura da página
function activateMenuAtCurrentSection(section) {

    // linha imaginária
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha imaginária
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    /* console.log('O fundo da seção passou a linha?', sectionEndPassedTargetLine); */

    // verificar se a base está abaixo da linha imaginária
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    /* console.log('O topo da seção passou a linha?', sectionTopReachOrPassedTargetLine); */

    // limites da seção
    const sectionBoundaries =
        sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
}

// Mostrar navbar diferente ao descer a página
function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

// Botão que volta ao topo
function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Mobile: abre o menu
function openMenu() {
    document.body.classList.add('menu-expanded')
}

// Mobile: fecha o menu
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

// Revela aos poucos os elementos da página
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content`)
