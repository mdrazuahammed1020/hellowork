
// API endpoint for getting exchange rates
const API_URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=U6OqHivunltDO5QzX31QPDSZQ4UrKGjj9DNusJb2&currencies=12';

// Function to get exchange rate from API
async function getExchangeRate(from, to) {
  try {
    const response = await fetch(`${API_URL}?base=${from}&symbols=${to}`);
    const data = await response.json();
    return data.rates[to];
  } catch (error) {
    console.log(error);
  }
}

// Function to convert from one currency to another
async function convertCurrency(amount, from, to) {
  const exchangeRate = await getExchangeRate(from, to);
  return (amount * exchangeRate).toFixed(2);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  // Get form values
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;
  
  // Convert currency and display result
  convertCurrency(amount, fromCurrency, toCurrency).then(result => {
    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is worth ${result} ${toCurrency}.`;
  });
}

// Add event listener to form
document.getElementById('converter-form').addEventListener('submit', handleSubmit);
