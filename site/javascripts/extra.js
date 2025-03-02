document$.subscribe(function() {
  // Check if the counter is already in localStorage
  if (!localStorage.getItem('page_view_count')) {
    localStorage.setItem('page_view_count', 0);
  }

  // Increment the counter
  let count = parseInt(localStorage.getItem('page_view_count'), 10);
  count += 1;
  localStorage.setItem('page_view_count', count);

  // Display the counter on the page
  const counterElement = document.createElement('div');
  counterElement.style.position = 'fixed';
  counterElement.style.bottom = '10px';
  counterElement.style.right = '10px';
  counterElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  counterElement.style.color = 'white';
  counterElement.style.padding = '5px';
  counterElement.style.borderRadius = '5px';
  counterElement.innerText = `Page views: ${count}`;

  document.body.appendChild(counterElement);
});