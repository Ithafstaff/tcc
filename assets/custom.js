const salePriceEl = document.querySelector('sale-price');
const salePriceOnly = Array.from(salePriceEl.childNodes)
  .filter(node => node.nodeType === Node.TEXT_NODE)
  .map(node => node.textContent.trim())
  .join('');

console.log(salePriceOnly); // Outputs: "$0.00"