function courseSale() {
    const courseName = document.getElementById("courseName").value;
    const Python_price = 12000000;
    const Frontend_price = 14000000;
    const UX_UI = 9000000;
    let price;
    if (courseName == "none") {
        price = 0;
    } else if (courseName == "py") {
        price = Python_price;
    } else if (courseName == "fr") {
        price = Frontend_price;
    } else if (courseName == "ux") {
        price = UX_UI;
    } else {
        price = " cho nado"
    }

    const discountRange = document.getElementById("discountRange").value
    const discountValue = document.getElementById("discountValue");
    discountValue.innerHTML = discountRange + '%';

    const sum = price / 100 * (100 - discountRange);
    const resulValue = document.getElementById("sale");
    resulValue.value = sum
    console.log(sum);
}

const calcBtn = document.getElementById('calculateButton')
calcBtn.addEventListener('click', calc)

function calc() {
    let a = +document.getElementById('inputA').value;
    let b = +document.getElementById('inputB').value;
    let result = document.getElementById("result")
    let c = a * b;
    result.innerHTML = "resultat: " + c

}


let country = document.getElementById("country")
country.addEventListener("input", registration)
let phone = document.getElementById("phone")
let countryValue = country.value

function registration() {

    if (countryValue == "uz") {
        phone.value = "+998"
    } else if (countryValue == "kz") {
        phone.value= "+7"
    } else if (countryValue == "us") {
        phone.value = "+1";
    } else {
        phone.value = "choose again";
    }
    


} 

let checkbox = document.getElementById("check");
checkbox.addEventListener("input", activeBtn);

function activeBtn() {
    let checkboxValue = checkbox.checked;
    let btn = document.getElementById("btn");
    if (checkboxValue) {
        btn.disable = false
    } else {
        btn.disable = true
    }
}

