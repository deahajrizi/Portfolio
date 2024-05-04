let aboutMenu = document.getElementById('about')
let workMenu = document.getElementById('work')
let contactMenu = document.getElementById('contact')
let url = document.URL
let navExtend = document.getElementById('navExtend')
let h2 = document.getElementById('h2')

//Si l'URL inclut celui de la page que je veux détecter, changer le style du 'a' qui correspond à la bonne page dans la navigation
if(url.includes('about.html')){
    aboutMenu.style.cssText = 'color: #F06F6B;'
} else if(url.includes('work.html')){
    workMenu.style.cssText = 'color: #F06F6B;'
} else if(url.includes('contact.html')){
    contactMenu.style.cssText = 'color: #F06F6B;'
}
// Quand on hover sur 'work' dans la nav, montrer la navExtend pour voir les projets
workMenu.addEventListener('mouseover', function(){
    navExtend.style.cssText = 'opacity: 1; pointer-events: unset;'
})
// Quand la souris sort du navExtend, la rendre invisible à nouveau
navExtend.addEventListener('mouseleave', function(){
    navExtend.style.cssText = 'opacity: 0; pointer-events: none;'
})
// Si l'écran fait max 750px, je change le texte de l'animation du H2 pour qu'il ne sorte pas de l'écran
if (window.matchMedia("(max-width: 750px)").matches){
    h2.textContent = 'web student'
}

