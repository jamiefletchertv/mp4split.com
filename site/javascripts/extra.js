console.log("Extra.js is loaded");

document.addEventListener('DOMContentLoaded', function() {
  // Check if the counter is already in localStorage
  if (!localStorage.getItem('page_view_count')) {
    localStorage.setItem('page_view_count', 0);
  }

  // Increment the counter
  let count = parseInt(localStorage.getItem('page_view_count'), 10);
  count += 1;
  localStorage.setItem('page_view_count', count);

  // Display the counter on the page with flip-style styling
  const counterElement = document.createElement('div');
  counterElement.style.position = 'fixed';
  counterElement.style.bottom = '10px';
  counterElement.style.left = '50%';
  counterElement.style.transform = 'translateX(-50%)';
  counterElement.style.backgroundColor = 'yellow';
  counterElement.style.color = 'blue';
  counterElement.style.padding = '5px';
  counterElement.style.border = '2px solid black';
  counterElement.style.fontFamily = 'Courier New, monospace';
  counterElement.style.fontSize = '24px';
  counterElement.style.letterSpacing = '5px';
  counterElement.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';
  counterElement.style.display = 'inline-block';
  counterElement.style.borderRadius = '5px';
  counterElement.innerText = `Page views: ${count}`;

  document.body.appendChild(counterElement);
});