let currentImg = document.getElementById('currentImage')
let autoplay
// Je stocke les images du slider dans un tableau
let images = ['img/image1.png', 'img/image2.png', 'img/image3.png', 'img/image4.png', 'img/image5.png', 'img/image6.png']
// Je crée i et lui donne une valeur de '0'
let i = 0
// On affiche la première image (index 0 du tableau 'images')
currentImg.src = images[0]
// Fonction qui va montrer l'image suivante
function next(){
    // J'incrémente la valeur de i pour pouvoir incrémenter l'index de l'image et passer à la suivante
    i++
    currentImg.src = images[i]
    // Si l'index de l'image affichée devient plus grand que le dernier index du tableau, revenir à la première image
    if(i >images.length -1){
        i = 0
    }
    // On update l'image à nouveau
    currentImg.src = images[i]
}
// On définit un timing pour qu'il passe à l'image suivante automatiquement
autoplay = setInterval(next, 3000)