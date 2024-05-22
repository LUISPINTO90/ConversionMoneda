document
  .getElementById("converter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    const rates = {
      USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110, MXN: 20 },
      EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 129.53, MXN: 23.53 },
      GBP: { USD: 1.34, EUR: 1.14, GBP: 1, JPY: 146.92, MXN: 26.82 },
      JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, JPY: 1, MXN: 0.18 },
      MXN: { USD: 0.05, EUR: 0.0425, GBP: 0.0373, JPY: 5.56, MXN: 1 },
    };

    const result = (amount * rates[fromCurrency][toCurrency]).toFixed(2);

    document.getElementById(
      "result"
    ).textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  });
