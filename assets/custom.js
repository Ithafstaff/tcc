function renderPrice() {
  const salePriceEl = document.querySelector('sale-price'); // Correct selector for custom element
  const renderPrice = document.getElementById('renderPrice');

  // Get the price text directly from the sale-price element
  const salePriceOnly = salePriceEl.textContent.trim();

  renderPrice.innerText = salePriceOnly;
  console.log(salePriceOnly); // Outputs the price, e.g., "$1.00"
}

renderPrice();
