const myinput = document.getElementById("myinput");
const selection = document.getElementById("toCurrency");
const output = document.getElementById("output");
const button = document.getElementById("convert");

const rates = {
  INR: 83.20,
  EUR: 0.93,
  GBP: 0.79,
  JPY: 155.60
};

button.addEventListener("click", () => {
  const amount = parseFloat(myinput.value);
  const toCurrency = selection.value;


  const converted = amount * rates[toCurrency];
  output.textContent = `💱 ${amount} USD = ${converted.toFixed(2)} ${toCurrency}`;
});
