// MaxConv Tracking Script
!function(w,d,o,n,c){w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};var s=d.createElement(n),t=d.getElementsByTagName(n)[0];s.async=!0;s.defer=!0;s.src="//track.healthdeepinsight.com/t/t.js";t.parentNode.insertBefore(s,t);}(window,document,"maxconv","script");

// Floating CTA - Show after scrolling 30%
(function() {
  var floatingCta = document.querySelector('.floating-cta');
  if (!floatingCta) return;

  var isVisible = false;

  function checkScroll() {
    var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent >= 30 && !isVisible) {
      floatingCta.classList.remove('hidden');
      isVisible = true;
    } else if (scrollPercent < 30 && isVisible) {
      floatingCta.classList.add('hidden');
      isVisible = false;
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll(); // Check initial state
})();
