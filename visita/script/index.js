let form = document.getElementById('farmForm')
let farm = form.farms
const discountInputs        = document.querySelectorAll('input[name="discount"]');
const discountStudentsInput = document.getElementById('education')
const discountClientInput   = document.getElementById('client')
const discountMemberInput   = document.getElementById('member')

const studentsCard  = document.getElementById('educationCard')
const clientsCard   = document.getElementById('clientCard')
const membersCard   = document.getElementById('memberCard')
const discountCards = document.getElementsByClassName('discountCard')

const resetButton = document.getElementById('resetBtn')
const submitButton = document.getElementById('submitBtn')

let ticketQuantity = document.getElementById('ticketQuantity')
let priceSpan = document.getElementById('price')
let resumeSpan = document.getElementById('resume')
let discount = 1
let price
let resume

function selectingCard(){

    if(discountStudentsInput.checked){
        studentsCard.style.background = "#212A3E"
        studentsCard.style.color      = "#F1F6F9"
    }else{
        studentsCard.style.background = "white"
        studentsCard.style.color      = "black"
    }
    
    if(discountClientInput.checked){
        clientsCard.style.background = "#212A3E"
        clientsCard.style.color      = "#F1F6F9"
    }else{
        clientsCard.style.background = "white"
        clientsCard.style.color      = "black"
    }

    if(discountMemberInput.checked){
        membersCard.style.background = "#212A3E"
        membersCard.style.color      = "#F1F6F9"
    }else{
        membersCard.style.background = "white"
        membersCard.style.color      = "black"
    }
    
    discountSelection()
}

function discountSelection(){
    if (discountStudentsInput.checked){
        discount = 0.5
    }
    if (discountClientInput.checked){
        discount = 0.7
    }
    if (discountMemberInput.checked){
        discount = 0.25
    }
}

function priceSelection(){
    price = this.value
    spanPriceWriting()
}

function spanPriceWriting(){
    priceSpan.textContent = "$" + price
    
    if(price == 0){
        priceSpan.textContent= "-"
    }
}

function resumeCalculation(){    
    resume = (ticketQuantity.value * price) * discount
    
    resumeSpanWriting()
}

function resumeSpanWriting(){
    resumeSpan.textContent = "$" + resume
    if(discountStudentsInput.checked && ticketQuantity.value < 10){
        resumeSpan.textContent = "Para el descuento de estudiantes se deben comprar al menos 10 tickets"
    }
    if(resume == 0 || ticketQuantity.value == ""){
        resumeSpan.textContent = "Por favor seleccione una granja y cantidad de tickets"
    }
}

function resetingAll(){
    studentsCard.style.background = "white"
    studentsCard.style.color      = "black"
    clientsCard.style.background  = "white"
    clientsCard.style.color       = "black"
    membersCard.style.background  = "white"
    membersCard.style.color       = "black"
    
    discount = 1
    price = 0

    priceSpan.textContent = "-"
    resumeSpan.textContent = "-"
}


for(const input of discountInputs){
    input.addEventListener('change', selectingCard);    
}
farm.addEventListener('change', priceSelection)
resetButton.addEventListener('click', resetingAll)
submitButton.addEventListener('click', resumeCalculation)