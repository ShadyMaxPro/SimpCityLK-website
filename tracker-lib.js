// tracker-lib.js
(function () {
  // Dummy function that simulates real tracking logic
  const trackerActive = true;

  // Add a hidden element to confirm loading
  const marker = document.createElement('div');
  marker.id = 'tracker-confirm';
  marker.style.cssText = 'display: none;';
  document.body.appendChild(marker);

  console.log("Tracker-lib loaded and marker inserted.");
})();

(function () {
  const marker = document.createElement('div');
  marker.id = 'tracker-confirm';
  marker.style.display = 'none';
  document.body.appendChild(marker);
})();
