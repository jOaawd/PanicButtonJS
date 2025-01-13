(function() {
  let keyBind = 'P';

  const panicButton = document.createElement('button');
  panicButton.id = 'panicButton';
  panicButton.textContent = 'PanicButton';
  
  document.body.appendChild(panicButton);

  function goToGoogle() {
    window.location.href = "https://www.google.com";
  }

  panicButton.addEventListener('click', function() {
    const newKey = prompt("Enter a new keybind for Panic Button:", keyBind);
    if (newKey) {
      keyBind = newKey.toUpperCase();
      alert(`Panic Button keybind changed to: ${keyBind}`);
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key.toUpperCase() === keyBind) {
      goToGoogle();
    }
  });
})();
