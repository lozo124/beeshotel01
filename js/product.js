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
      floatingCta.classList.add('visible');
      isVisible = true;
    } else if (scrollPercent < 30 && isVisible) {
      floatingCta.classList.remove('visible');
      isVisible = false;
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll(); // Check initial state
})();

// Image Gallery functionality
(function() {
  var thumbnails = document.querySelectorAll('.thumbnail');
  var mainImage = document.querySelector('.main-image img');

  if (!thumbnails.length || !mainImage) return;

  thumbnails.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      var newSrc = this.querySelector('img').src;
      mainImage.src = newSrc;

      // Update active state
      thumbnails.forEach(function(t) {
        t.style.borderColor = 'transparent';
      });
      this.style.borderColor = '#2f5c1a';
    });
  });

  // Set first thumbnail as active
  if (thumbnails[0]) {
    thumbnails[0].style.borderColor = '#2f5c1a';
  }
})();
