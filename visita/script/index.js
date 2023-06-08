const discountInputs        = document.querySelectorAll('input[name="discount"]');
const discountStudentsInput = document.getElementById('education')
const discountClientInput   = document.getElementById('client')
const discountMemberInput   = document.getElementById('member')

const studentsCard  = document.getElementById('educationCard')
const clientsCard   = document.getElementById('clientCard')
const membersCard   = document.getElementById('memberCard')
const discountCards = document.getElementsByClassName('discountCard')

const resetButton = document.getElementById('resetBtn')

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
}

function deselection(){
    studentsCard.style.background = "white"
    studentsCard.style.color      = "black"
    clientsCard.style.background  = "white"
    clientsCard.style.color       = "black"
    membersCard.style.background  = "white"
    membersCard.style.color       = "black"

}

for(const radioButton of discountInputs){
    radioButton.addEventListener('change', selectingCard);
    resetButton.addEventListener('click', deselection)
}
