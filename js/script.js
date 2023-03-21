{
    const welcome = () => {
        console.log("Hello all curious, checking the depths of the code")
    }

    welcome();

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.69;
        const rateUGX = 0.0012;
        const rateTMM = 1.25;
        const rateLKR = 0.013;
        const rateCVE = 0.043;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "UGX":
                return amount / rateUGX;

            case "TMM":
                return amount / rateTMM;

            case "LKR":
                return amount / rateLKR;

            case "CVE":
                return amount / rateCVE;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;

    }

    const onFormInput = () => {

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);
    };

    init();
}