/* Menu mobile */

/* ===== MENU MOBILE : bouton, lien, Échap ou clic extérieur ===== */
function menuSet(o){var n=$('nv'),b=n.querySelector('.mb');n.classList.toggle('open',o);if(b)b.setAttribute('aria-expanded',o)}
document.addEventListener('click',function(e){var n=$('nv'),o=n.classList.contains('open');
if(e.target.closest('.mb'))menuSet(!o);else if(o&&(e.target.closest('.nl a')||!e.target.closest('nav')))menuSet(false)});
document.addEventListener('keydown',function(e){if(e.key=='Escape')menuSet(false)});
