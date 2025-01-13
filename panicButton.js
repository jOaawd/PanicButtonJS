(function() {
  let keyBind = 'P';

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  const savedKeyBind = getCookie('panicButtonKeyBind');
  if (savedKeyBind) {
    keyBind = savedKeyBind;
  }

  const panicButton = document.createElement('button');
  panicButton.id = 'panicButton';
  panicButton.textContent = 'Panic Button';
  
  document.body.appendChild(panicButton);

  function goToGoogle() {
    window.location.href = "https://www.google.com";
  }

  panicButton.addEventListener('click', function() {
    const newKey = prompt("Enter a new keybind for Panic Button:", keyBind);
    if (newKey) {
      keyBind = newKey.toUpperCase();
      setCookie('panicButtonKeyBind', keyBind, 365); 
      alert(`Panic Button keybind changed to: ${keyBind}`);
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key.toUpperCase() === keyBind) {
      goToGoogle();
    }
  });
})();
