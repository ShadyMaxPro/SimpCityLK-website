const adScript = document.createElement('script');
adScript.src = '/ads.js';
adScript.onerror = function () {
  // Only show overlay if the file fails to load
  document.getElementById('adblock-overlay').style.display = 'block';
};
document.body.appendChild(adScript);
