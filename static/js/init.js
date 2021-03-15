window.onGatsbyInitialClientRender = function() {
// Sticky header
var offsetY = 0;
var ticking = false;

window.addEventListener('scroll', function (e) {
  offsetY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      handleHeader(offsetY);
      ticking = false;
    });
    ticking = true;
  }
});

function handleHeader(scrollPos) {
  if (scrollPos > 0) {
    document.body.classList.add('has--scrolled');
  } else {
    document.body.classList.remove('has--scrolled');
  }
}

};
<div data-paperform-id="incidenciasruizlizondo"></div><script>(function() {var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()</script>