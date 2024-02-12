const inputmoneyBill = document.getElementById('moneybill');
const percBotao = document.querySelectorAll('.percbutton');
const inputCustom = document.getElementById('numbercustom');
const numberOfPeople = document.getElementById('numberpeople');
const tipAmount = document.getElementById('tipAmoun');
const totalPers = document.getElementById('totalPerson');
const resetbotao = document.getElementById('reset');
const errorMessageDiv = document.getElementById('error-message');

percBotao.forEach(percbutton => {
    percbutton.addEventListener('click', () => {
        const isActive = percbutton.classList.contains('active');

        percBotao.forEach(percbutton => {
            percbutton.classList.remove('active');
        });
        
        if (!isActive) {
            percbutton.classList.add('active');
        }
    });
});

function selectedpercbutton(event) {
    let pselectedbutton = document.querySelector('.percbutton--active')
}

// Botão Reset

resetbotao.addEventListener('click', function () {
    inputmoneyBill.value = '';
    inputCustom.value = '';
    numberOfPeople.value = '';
    tipAmount.textContent = '$0.00';
    totalPers.textContent = '$0.00';
});

percBotao.forEach(percbutton => percbutton.addEventListener('click', (event) => selectedpercbutton(event)));


