function checkAdBlocker() {
  const overlay = document.getElementById('adblock-overlay');

  const bait = document.createElement('div');
  bait.className = 'ad ads advertisement banner-ad';
  bait.style.position = 'absolute';
  bait.style.left = '-9999px';
  bait.style.height = '1px';
  bait.style.width = '1px';
  bait.style.top = '0';
  document.body.appendChild(bait);

  let imgBlocked = false;
  const testImg = new Image();
  testImg.src = '/ads.js';
  testImg.onerror = () => { imgBlocked = true; };

  setTimeout(() => {
    const baitBlocked =
      !document.body.contains(bait) ||
      window.getComputedStyle(bait).display === 'none' ||
      bait.offsetParent === null;

    if (baitBlocked || imgBlocked) {
      overlay.style.display = 'flex';
      overlay.focus();
    } else {
      // Ad blocker is gone, reload page to fully enable ads and content
      location.reload();
    }

    bait.remove();
  }, 150);
}
