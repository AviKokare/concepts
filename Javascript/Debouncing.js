function debounce(func, delay) {
  let timeoutId;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

// Example usage:
const debounceFunction = debounce(function() {
  // Your time-consuming task or function goes here
  console.log('Debounced function executed');
}, 300);

// Attach the debounced function to an event
window.addEventListener('resize', debounceFunction);
