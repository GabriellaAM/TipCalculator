let inputmoneyBill = document.getElementById('moneybill');
const percBotao = document.querySelectorAll('.percbutton:not(:last-child)');
let inputCustom = document.getElementById('numbercustom');
let numberOfPeople = document.getElementById('numberpeople');
const tipAmount = document.getElementById('tipAmoun');
const totalPers = document.getElementById('totalPerson');
const resetbotao = document.getElementById('reset');
const errorMessageDivBill = document.querySelector('.error-message.bill');
const errorMessageDivPeople = document.querySelector('.error-message.people');

// Botões Porcentagem Classe "Active"

function selectpercBotao(event) {

    let previousSelectedButton = document.querySelector('.percbutton.active');

    if (previousSelectedButton) {
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

    if (selectedButton) {
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

    if (inputCustom.value === '' && selectedButton) {
        valorTip = Number(selectedButton.dataset.percentage) / 100;
    } else if (inputCustom.value !== '' && !selectedButton) {
        valorTip = Number(inputCustom.value) / 100;

        console.log("lido")
    }

    if ((valorTip || valorTip === 0) && valorBill && valorNumberofpeople) {
        const TotalTip = (valorBill * valorTip);
        const Total = (valorBill + TotalTip);

        tipAmount.textContent = "$" + (TotalTip / valorNumberofpeople).toFixed(2);

        totalPers.textContent = "$" + (Total / valorNumberofpeople).toFixed(2);
    }
}

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

// Mensagem de Erro

function errormessage(inputField) {
    const valor = parseFloat(inputField.value);

    let campoBorda = document.querySelectorAll('.campo');

    if (inputField === inputmoneyBill) {
        campoBorda = document.querySelectorAll('.campo')[0];
    } else if (inputField === numberOfPeople) {
        campoBorda = document.querySelectorAll('.campo')[1];
    }

    if (inputField === inputmoneyBill) {
        if (valor == 0 || isNaN(valor)) {
            errorMessageDivBill.style.display = "block";
            campoBorda.classList.add('active');
        } else {
            errorMessageDivBill.style.display = "none";
            campoBorda.classList.remove('active')
        }
    } else if (inputField === numberOfPeople) {
        if (valor == 0 || isNaN(valor)) {
            errorMessageDivPeople.style.display = "block";
            campoBorda.classList.add('active');
        } else {
            errorMessageDivPeople.style.display = "none";
            campoBorda.classList.remove('active')
        }
    }
};

// Eventos

inputmoneyBill.addEventListener('blur', (event) => {
    calculTip();
    errormessage(event.target);
});

numberOfPeople.addEventListener('blur', (event) => {
    calculTip();
    errormessage(event.target);
});

inputCustom.addEventListener('focus', removepercbutton);

inputCustom.addEventListener('blur', calculTip);




