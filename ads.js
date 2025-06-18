function checkAdBlocker() {
  const overlay = document.getElementById('adblock-overlay');

  // Create bait element with common ad-related class names
  const bait = document.createElement('div');
  bait.className = 'ad ads advertisement banner-ad';
  bait.style.position = 'absolute';
  bait.style.left = '-9999px'; // hide off-screen
  bait.style.height = '1px';
  bait.style.width = '1px';
  document.body.appendChild(bait);

  // Check if bait element is blocked by style or removal
  setTimeout(() => {
    const baitBlocked = !document.body.contains(bait) || window.getComputedStyle(bait).display === 'none' || bait.offsetParent === null;

    // Attempt to load a dummy ad resource
    const testImg = new Image();
    testImg.src = '/ads.js'; // common ad resource path, likely blocked
    let imgBlocked = false;
    testImg.onerror = () => { imgBlocked = true; showOverlay(); };
    testImg.onload = () => {
      if (baitBlocked) {
        showOverlay();
      } else {
        overlay.style.display = 'none';
      }
      bait.remove();
    };

    // Fallback if image doesn't load event fires late
    setTimeout(() => {
      if (imgBlocked || baitBlocked) {
        showOverlay();
      } else {
        overlay.style.display = 'none';
      }
      bait.remove();
    }, 1500);

  }, 100);

  function showOverlay() {
    overlay.style.display = 'flex';
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  checkAdBlocker();
});
