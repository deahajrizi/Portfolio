let img1 = document.getElementById('projectImage1')
let img2 = document.getElementById('projectImage2')
let img3 = document.getElementById('projectImage3')
let img4 = document.getElementById('projectImage4')
let img5 = document.getElementById('projectImage5')

// Conteneur et image qui sera montrée en fullscreen
let fullscreenContainer = document.getElementById('fullscreenContainer')
let fullscreenImg = document.getElementById('fullscreenImg')

// Je crée un tableau pour chaque série d'images, en fonction de la page projet
let gdayImages = ['img/image1.png', 'img/image2.png', 'img/gday3.png', 'img/gday4.png', 'img/gday5.png']
let brisImages = ['img/brisbane1.png', 'img/brisbane2.png', 'img/brisbane3.png', 'img/brisbane44.png', 'img/brisbane5.png']
let geImages = ['img/image5.png', 'img/image6.png', 'img/image7.png', 'img/image8.png']

//Icônes pour passer à l'image suivante ou précédente et croix pour quitter le mode fullscreen
let exitIcon = document.getElementById('exitIconContainer')
let previousIcon = document.getElementById('previousIconContainer')
let nextIcon = document.getElementById('nextIconContainer')

// Je set le nombre de l'image à 0
let imageNumber = 0
// J'appelle la variable array pour pouvoir lui donner une valeur dans les fonctions plus bas
let array
// Je crée une variable qui stocke la media query pour le mobile
let checkMediaQuery = window.matchMedia("(max-width: 750px)").matches

// Fonction pour rendre le fullscreen invisible
function closeFullscreen(){
    fullscreenContainer.style.opacity = '0'
    fullscreenContainer.style.pointerEvents = 'none'
}
// Fonction pour chaque clic sur une image avec les paramètres 'img' et 'imgNb'
function clickImage(img,imageNb){
    // D'abord, je check la taille de l'écran pour rendre le fullscreen invisible sur mobile
    if(checkMediaQuery){
        closeFullscreen()
    } else { // Sinon, lorsque l'on clique sur une image, lancer la fonction 'click'
       img.addEventListener('click', function click() {
                // Je rend le fullscreen conteneur visible
               fullscreenContainer.style.opacity = '1'
                // La source de l'image en fullscreen correspond à la même qui se trouve dans le tableau créé plus haut
                // parce qu'on a défini quelle image et quelle est son nombre dans les paramètres
               fullscreenImg.src = array[imageNb -1]
               fullscreenContainer.style.pointerEvents = 'unset'
                // On update l'image number pour qu'il corresponde à celui mis dans les paramètres
               imageNumber = imageNb
       })}
}
// Lorsque l'on clique sur icône 'exit', fermer le mode fullscreen
exitIcon.addEventListener('click', function(){
    closeFullscreen()
})
// Je check l'URL pour savoir sur quelle page on est afin de choisir le tableau correspondant au projet voulu
if(url.includes('gday.html')){
    array = gdayImages
    // Pour chaque image, je lance la fonction click avec l'imageNb correspondant pour que l'image sur laquelle on a cliqué
    // soit la même que celle qui va s'afficher en fullscreen
    clickImage(img1, 1)
    clickImage(img2, 2)
    clickImage(img3,3)
    clickImage(img4, 4)
    clickImage(img5, 5)
} else if(url.includes('brisbaneGuide.html')){
    array = brisImages
     clickImage(img1, 1)
     clickImage(img2, 2)
     clickImage(img3, 3)
     clickImage(img4,4)
     clickImage(img5,5)
} else if(url.includes('geGuide.html')){
    array = geImages
    clickImage(img1, 1)
    clickImage(img2,2)
    clickImage(img3,3)
    clickImage(img4,4)
}
// Fonction pour passer à l'image suivante en fonction de la page (je check l'URL à nouveau)
function next(){
    if(url.includes('gday.html')){
        // Je check l'imageNumber pour savoir sur quelle image on est et j'incrémente celui-ci en plus de passer
        // à l'index de l'image suivante dans le tableau correspondant au projet
        if(imageNumber === 1){
            fullscreenImg.src = gdayImages[1]
            imageNumber = 2
        } else if(imageNumber === 2){
            fullscreenImg.src = gdayImages[2]
            imageNumber = 3
        } else if(imageNumber === 3){
            fullscreenImg.src = gdayImages[3]
            imageNumber = 4
            // Si on est sur la dernière image, on passe à la première
        } else if(imageNumber === 4){
            fullscreenImg.src = gdayImages[4]
            imageNumber = 0
        } else if(imageNumber === 0){
            fullscreenImg.src = gdayImages[0]
            imageNumber = 1
        }
    } else if(url.includes('brisbaneGuide.html')){
        if(imageNumber === 1){
            fullscreenImg.src = brisImages[1]
            imageNumber = 2
        } else if(imageNumber === 2){
            fullscreenImg.src = brisImages[2]
            imageNumber = 3
        } else if(imageNumber === 3){
            fullscreenImg.src = brisImages[3]
            imageNumber = 4
        } else if(imageNumber === 4){
            fullscreenImg.src = brisImages[4]
            imageNumber = 0
        }  else if(imageNumber === 0){
            fullscreenImg.src = brisImages[0]
            imageNumber = 1
        }
    } else if(url.includes('geGuide.html')){
        if(imageNumber === 1){
            fullscreenImg.src = geImages[1]
            imageNumber = 2
        } else if(imageNumber === 2){
            fullscreenImg.src = geImages[2]
            imageNumber = 3
        } else if(imageNumber === 3){
            fullscreenImg.src = geImages[3]
            imageNumber = 0
        } else if(imageNumber === 0){
            fullscreenImg.src = geImages[0]
            imageNumber = 1
        }
    }
}
// Fonction pour passer à l'image précédente en fonction de la page (je check l'URL à nouveau)
function previous(){
    if(url.includes('gday.html')){
        // Je check l'imageNumber pour savoir sur quelle image on est et je décrémente celui-ci en plus de passer
        // à l'index de l'image précédente dans le tableau correspondant au projet
        if(imageNumber === 1){
            // Si on est sur la première image, on passe à la dernière du tableau
            fullscreenImg.src = gdayImages[4]
            imageNumber = 5
        } else if(imageNumber === 2){
            fullscreenImg.src = gdayImages[0]
            imageNumber = 1
        } else if(imageNumber === 3){
            fullscreenImg.src = gdayImages[1]
            imageNumber = 2
        } else if(imageNumber === 4){
            fullscreenImg.src = gdayImages[2]
            imageNumber = 3
        } else if(imageNumber === 5){
            fullscreenImg.src = gdayImages[3]
            imageNumber = 4
        }
    } else if(url.includes('brisbaneGuide.html')){
        if(imageNumber === 1){
            fullscreenImg.src = brisImages[4]
            imageNumber = 5
        } else if(imageNumber === 2){
            fullscreenImg.src = brisImages[0]
            imageNumber = 1
        } else if(imageNumber === 3){
            fullscreenImg.src = brisImages[1]
            imageNumber = 2
        } else if(imageNumber === 4){
            fullscreenImg.src = brisImages[2]
            imageNumber = 3
        } else if(imageNumber === 5){
            fullscreenImg.src = brisImages[3]
            imageNumber = 4
        }
    } else if(url.includes('geGuide.html')){
        if(imageNumber === 1){
            fullscreenImg.src = geImages[3]
            imageNumber = 4
        } else if(imageNumber === 2){
            fullscreenImg.src = geImages[0]
            imageNumber = 1
        } else if(imageNumber === 3){
            fullscreenImg.src = geImages[1]
            imageNumber = 2
        } else if(imageNumber === 4){
            fullscreenImg.src = geImages[2]
            imageNumber = 3
        }
    }
}
// Je détecte le clic sur les deux boutons 'précédent' et 'suivant' et j'applique la fonction correspondante
previousIcon.addEventListener('click', previous)
nextIcon.addEventListener('click', next)




