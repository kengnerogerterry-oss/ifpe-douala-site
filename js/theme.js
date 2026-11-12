/* Thème clair / sombre */

/* ===== [MODIF 2 – MODE SOMBRE] Bouton bascule, préférence système, persistance =====
   - Au chargement : le thème a déjà été posé par le script de index.html (anti-flash).
   - Clic sur .tm : bascule clair/sombre et enregistre le choix dans localStorage (« ifpe-theme »).
   - Sans choix enregistré : le site suit la préférence système en direct (prefers-color-scheme).
   - Synchronisation entre onglets via l'évènement « storage ». Tout est protégé par try/catch (navigation privée). */
(function(){
  var KEY='ifpe-theme',root=document.documentElement,
      mq=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
  function saved(){try{var v=localStorage.getItem(KEY);return v=='dark'||v=='light'?v:null}catch(e){return null}}
  function apply(th,animate){
    if(animate){root.classList.add('theme-anim');clearTimeout(apply.t);apply.t=setTimeout(function(){root.classList.remove('theme-anim')},400)}
    root.setAttribute('data-theme',th);
    var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',th=='dark'?'#0b1522':'#1a6bbd');
    [].forEach.call(document.querySelectorAll('.tm'),function(b){b.setAttribute('aria-pressed',th=='dark')})}
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('.tm');if(!b)return;
    var n=root.getAttribute('data-theme')=='dark'?'light':'dark';
    apply(n,true);try{localStorage.setItem(KEY,n)}catch(x){}});
  if(mq){var f=function(e){if(!saved())apply(e.matches?'dark':'light',true)};
    if(mq.addEventListener)mq.addEventListener('change',f);else if(mq.addListener)mq.addListener(f)}
  window.addEventListener('storage',function(e){if(e.key==KEY&&(e.newValue=='dark'||e.newValue=='light'))apply(e.newValue,true)});
  apply(saved()||(mq&&mq.matches?'dark':'light'),false);
})();
