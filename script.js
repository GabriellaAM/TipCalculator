let inputmoneyBill = document.getElementById('moneybill');
const percBotao = document.querySelectorAll('.percbutton:not(:last-child)');
let inputCustom = document.getElementById('numbercustom');
let numberOfPeople = document.getElementById('numberpeople');
const tipAmount = document.getElementById('tipAmoun');
const totalPers = document.getElementById('totalPerson');
const resetbotao = document.getElementById('reset');
const errorMessageDiv = document.getElementById('error-message');

// Botões Porcentagem Classe "Active"

function selectpercBotao(event) {
        
        let previousSelectedButton = document.querySelector('.percbutton.active');
        
        if (previousSelectedButton){
            previousSelectedButton.classList.remove('active');

        event.target.classList.add('active');
        
        } else {

            event.target.classList.add('active');
        }

        inputCustom.value = '';

        calculTip();
}

function removepercbutton() {
    let selectedButton = document.querySelector('.percbutton.active');

    if(selectedButton) {
        selectedButton.classList.remove('active')
    }
}

percBotao.forEach(percbuttonbutton => percbuttonbutton.addEventListener('click', (event) => selectpercBotao(event)));

// Cálculo Tip

function calculTip() {

    let selectedButton = document.querySelector('.percbutton.active');

    const valorBill = parseFloat(inputmoneyBill.value.replace(',', '.'));
    const valorNumberofpeople = parseFloat(numberOfPeople.value);
    let valorTip = null;

    if(inputCustom.value === '' && selectedButton) {
        valorTip = Number(selectedButton.dataset.percentage) / 100;
    } else if(inputCustom.value !== '' && !selectedButton) {
        valorTip = Number(inputCustom.value) / 100;

        console.log("lido")
    }

    if  ((valorTip || valorTip === 0) && valorBill && valorNumberofpeople) {
        const TotalTip = (valorBill * valorTip);
        const Total = (valorBill + TotalTip);

        tipAmount.textContent =  "$" + (TotalTip / valorNumberofpeople).toFixed(2);

        totalPers.textContent = "$" + (Total / valorNumberofpeople).toFixed(2);
    }
}

inputmoneyBill.addEventListener('blur', (event) => {
    calculTip();
});

numberOfPeople.addEventListener('blur', (event) => {
    calculTip();
});

inputCustom.addEventListener('focus',removepercbutton);

inputCustom.addEventListener('blur', calculTip);

// Botão Reset

resetbotao.addEventListener('click', function () {
    inputmoneyBill.value = '';
    inputCustom.value = '';
    numberOfPeople.value = '';
    tipAmount.textContent = '$0.00';
    totalPers.textContent = '$0.00';

    percBotao.forEach(percbutton => {
        percbutton.classList.remove('active');
    });
});




