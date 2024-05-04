let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let gdayImg = document.getElementById('gdayImg')
let gdayH2 = document.getElementById('gdayH2')
let gdayP = document.getElementById('gdayP')
let brisImg = document.getElementById('brisImg')
let brisH2 = document.getElementById('brisH2')
let brisP = document.getElementById('brisP')
let geImg = document.getElementById('geImg')
let geH2 = document.getElementById('geH2')
let geP = document.getElementById('geP')

// Fonction pour afficher l'image et rendre invisible le texte se trouvant dans le card
// On lui donne des paramètres pour savoir sur quel card on est en définissant l'image, le H2 et le P
function opacity(img, h2, p){
    img.style.opacity = '1'
    h2.style.opacity = '0'
    p.style.opacity = '0'
}

// Fonction pour afficher le P et H2 et rendre l'image invisible à nouveau
function removeOpacity(img, h2, p){
    img.style.opacity = '0'
    h2.style.opacity = '1'
    p.style.opacity = '1'
}

// J'applique les deux fonctions sur chaque card, une sur le hover et une lorsque la souris sort du card
// afin d'afficher et de rendre invisible les éléments voulus
p1.addEventListener("mouseover", () => opacity(gdayImg,gdayH2,gdayP))
p1.addEventListener("mouseleave", () => removeOpacity(gdayImg,gdayH2,gdayP))

p2.addEventListener('mouseover', () => opacity(brisImg,brisH2,brisP))
p2.addEventListener('mouseleave', () => removeOpacity(brisImg,brisH2,brisP))

p3.addEventListener('mouseover', () => opacity(geImg,geH2,geP))
p3.addEventListener('mouseleave', () => removeOpacity(geImg,geH2,geP))

