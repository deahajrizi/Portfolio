// On va chercher tous les éléments dont on a besoin dans le html
let form = document.querySelector('form')
let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let address = document.querySelector('#address')
let npa = document.querySelector('#npa')
let city = document.querySelector('#city')
let tel = document.querySelector('#tel')
let email = document.querySelector('#email')
let msg = document.querySelector('#msg')
let submitButton = document.querySelector('#contactSubmitButton')
let modalContainer = document.querySelector('#modalContainer')
let modalClose = document.querySelector('#modalCloseButton')

// Je crée un tableau avec mes inputs qui me servira pour la validation
let inputs = [
    name, surname, address, npa, city, tel, email, msg
]
// On va chercher les divs qui seront utilisés pour afficher les messages d'erreurs etc
let messageName = document.querySelector('#messageName')
let messageSurname = document.querySelector('#messageSurname')
let messageAddress = document.querySelector('#messageAddress')
let messageNPA = document.querySelector('#messageNPA')
let messageCity = document.querySelector('#messageCity')
let messageTel = document.querySelector('#messageTel')
let messageEmail = document.querySelector('#messageEmail')
let messageMsg = document.querySelector('#messageMsg')

//On crée les RegEx
let regExName = /^[A-Za-zÀ-ÿ]+-?\s*[A-Za-zÀ-ÿ]+$/
let regExAddress = /[A-Za-zÀ-ÿ0-9,\-\s]{2,100}/
let regExNPA = /[0-9]{4}/
let regExTel = /(\+|00)?\s?(41)?\s?(0?[0-9][0-9])\s?.?([0-9]{2})?([0-9]{3})\s?.?([0-9]{2})\s?.?([0-9]{2})/
let regExEmail = /^([a-z0-9][a-z0-9._-]*)@([a-z0-9][a-z0-9._-]*)\.[a-z]{2,}$/

// Création du message d'erreur et ce qu'il contient
let submitErrorMessage = document.createElement('div')
submitErrorMessage.textContent = "Veuillez remplir le formulaire correctement."
submitErrorMessage.id = 'submitErrorMessage'


// Fonction 'style' pour pouvoir changer la couleur de la bordure des inputs selon le message d'erreur
function style(input, color){
    input.style.cssText = `border: 2px solid ${color};`
}
// Lorsque l'on sort de l'input, vérifier si ce qui a été entré correspond au RegEx pour le 'name', si oui, changer la bordure
// en vert et ne rien afficher, si rien n'a été entré, changer la bordure en orange et afficher un message d'erreur,
// si non, bordure en rouge + message d'erreur
name.addEventListener('blur', function(){
    if(regExName.test(name.value)){
        style(name, "rgb(119, 166, 134)")
        messageName.textContent = ''
    } else if(name.value === ''){
        style(name, '#F9CD77')
        messageName.textContent = 'Name is empty'
        messageName.style.cssText = 'color: #F9CD77;'

    } else {
        style(name, '#F28B88')
        messageName.textContent = "Please enter a valid name"
        messageName.style.cssText = 'color: #F06F6B;'
    }
})

// Même fonction pour chaque input
surname.addEventListener('blur', function(){
    if(regExName.test(surname.value)){
        style(surname, 'rgb(119, 166, 134)')
        messageSurname.textContent = ''
    } else if(surname.value === ''){
        style(surname, '#F9CD77')
        messageSurname.textContent = 'Surname is empty'
        messageSurname.style.cssText = 'color: #F9CD77;'
    } else {
        style(surname, '#F28B88')
        messageSurname.textContent = "Please enter a valid surname"
        messageSurname.style.cssText = 'color: #F06F6B;'
    }
})

address.addEventListener('blur', function(){
    if(regExAddress.test(address.value)){
        style(address, 'rgb(119, 166, 134)')
        messageAddress.textContent = ""
    } else if(address.value === ''){
        style(address, '#F9CD77')
        messageAddress.textContent = "Address is empty"
        messageAddress.style.cssText = 'color: #F9CD77;'

    } else {
        style(address, '#F28B88')
        messageAddress.textContent = "Please enter a valid address"
        messageAddress.style.cssText = 'color: #F06F6B;'
    }
})


npa.addEventListener('blur', function(){
    if(regExNPA.test(npa.value)){
        style(npa, 'rgb(119, 166, 134)')
        messageNPA.textContent = ""

    } else if(npa.value === ''){
        style(npa, '#F9CD77')
        messageNPA.textContent = "NPA is empty"
        messageNPA.style.cssText = 'color: #F9CD77;'
    } else {
        style(npa, '#F28B88')
        messageNPA.textContent = "Please enter a valid NPA"
        messageNPA.style.cssText = 'color: #F06F6B;'
    }
})

city.addEventListener('blur', function(){
    if(regExName.test(city.value)){
        style(city, 'rgb(119, 166, 134)')
        messageCity.textContent = ""

    } else if(city.value === ''){
        style(city, '#F9CD77')
        messageCity.textContent = "City is empty"
        messageCity.style.cssText = 'color: #F9CD77;'
    } else {
        style(city, '#F28B88')
        messageCity.textContent = "Please enter a valid city"
        messageCity.style.cssText = 'color: #F06F6B;'
    }
})

tel.addEventListener('blur', function(){
    if(regExTel.test(tel.value)){
        style(tel, 'rgb(119, 166, 134)')
        messageTel.textContent = ""

    } else if(tel.value === ''){
        style(tel, '#F9CD77')
        messageTel.textContent = "Phone number is empty"
        messageTel.style.cssText = 'color: #F9CD77;'
    } else {
        style(tel, '#F28B88')
        messageTel.textContent = "Please enter a valid phone number"
        messageTel.style.cssText = 'color: #F06F6B;'
    }
})

email.addEventListener('blur', function(){
    if(regExEmail.test(email.value)){
        style(email, 'rgb(119, 166, 134)')
        messageEmail.textContent = ""
    } else if(email.value === ''){
        style(email, '#F9CD77')
        messageEmail.textContent = "Email is empty"
        messageEmail.style.cssText = 'color: #F9CD77;'
    } else{
        style(email, 'rgb(242,139,136)')
        messageEmail.textContent = "Please enter a valid email"
        messageEmail.style.cssText = 'color: #F06F6B;'
    }
})

msg.addEventListener('blur', function(){
    if(msg.value !== ''){
        style(msg, 'rgb(119, 166, 134)')
        messageMsg.textContent = ""
    } else{
        style(msg, '#F8C662')
        messageMsg.textContent = "Message content is empty"
        messageMsg.style.cssText = 'color: #F9CD77;'
    }})

// --------------------------- FONCTION VALIDATE ---------------------------
//Créer une fonction pour remettre la couleur de bordure de base afin de reset le formulaire
function defaultBorder (){
    for(let i = 0; i < inputs.length; i++){ // Boucler sur le tableau des inputs pour qu'il l'applique à chacun
        inputs[i].style.cssText = 'border-color: 1px solid #DBE7E4;'
    }
}
// Lancement de fonction 'validate' lors du clic sur 'submit'
submitButton.addEventListener('click', function validate(e){
    e.preventDefault() // Annuler l'évènement par défaut -> rechargement de page lors du clic sur 'submit'
    // Si l'un des champs n'a pas de bordure verte (donc n'est pas valide), ne pas soumettre le formulaire
    if(name.style.cssText !== 'border: 2px solid rgb(119, 166, 134);'  || surname.style.cssText !== 'border: 2px solid rgb(119, 166, 134);'  || address.style.cssText !== 'border: 2px solid rgb(119, 166, 134);' || npa.style.cssText !== 'border: 2px solid rgb(119, 166, 134);' || city.style.cssText !== 'border: 2px solid rgb(119, 166, 134);' || tel.style.cssText !== 'border: 2px solid rgb(119, 166, 134);' || email.style.cssText !== 'border: 2px solid rgb(119, 166, 134);' || msg.style.cssText !== 'border: 2px solid rgb(119, 166, 134);'){
        form.appendChild(submitErrorMessage) // Insérer le message d'erreur dans le HTML
    } else {
        defaultBorder() // J'appelle ma fonction pour reset les bordures
        form.id = 'blur' // J'ajoute un effet blur
        modalContainer.className = 'showModal' // J'affiche le pop-up pour montrer que le message a été envoyé
        form.removeChild(submitErrorMessage) // J'enlève le message d'erreur s'il est présent
    }
})

modalClose.addEventListener('click', function closeModal(){ // Click sur le bouton 'fermer' du pop-up
    form.reset() // Je vide les inputs
    modalContainer.className = '' // Je lui enlève sa classe (qui l'affiche), donc il disparaît
    form.id = '' // J'enlève le blur
})

