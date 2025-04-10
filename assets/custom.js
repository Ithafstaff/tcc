// For rendering product price in product page renderPrice
function renderPrice() {
  const salePriceEl = document.querySelector('sale-price');
  const renderPrice = document.getElementById('renderPrice');

  const salePriceOnly = Array.from(salePriceEl.childNodes)
    .filter(node => node.nodeType === Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

  renderPrice.innerText = salePriceOnly;
  console.log(salePriceOnly); // Outputs: "$0.00"
}

renderPrice();
