function welcome() {
    console.log("Hello all curious, checking the depths of the code")
}

welcome();

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.69;
let rateUGX = 0.0012;
let rateTMM = 1.25;
let rateLKR = 0.013;
let rateCVE = 0.043;

formElement.addEventListener("input", () => {

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {

        case "EUR":
            result = amount / rateEUR;
            break;

        case "UGX":
            result = amount / rateUGX;
            break;

        case "TMM":
            result = amount / rateTMM;
            break;

        case "LKR":
            result = amount / rateLKR;
            break;

        case "CVE":
            result = amount / rateCVE;
            break;
    }

    resultElement.innerHTML = `${result.toFixed(2)} ${currency}
    </strong>`;
});