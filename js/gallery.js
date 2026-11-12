/* Galerie : carrousel de photos, interactions */

/* ===== [MODIF 6 – GALERIE] Carrousel : uniquement les photos de la rentrée solennelle (DATA.photos) =====
   Les affiches/flyers et les filtres par filière (puces) ont été retirés : une seule catégorie, aucun filtre utile. */
function galTrack(){var ps=DATA.photos,ids=idsOf(ps);return ps.map(function(p){return '<figure class="gi">'+thumb(p,ids,true)+(p.cap?'<figcaption>'+tr(p.cap)+'</figcaption>':'')+'</figure>'}).join('')}
P.galerie=function(){return '<section><div class="w"><span class="k">'+t('kGal')+'</span><h1>'+t('hGal')+'</h1><p class="mu">'+t('pGal')+'</p><div class="car"><button type="button" class="ar" data-sc="-1" aria-label="'+t('prevL')+'">‹</button><div class="trk" id="trk" tabindex="0">'+galTrack()+'</div><button type="button" class="ar" data-sc="1" aria-label="'+t('nextL')+'">›</button></div></div></section>'};

/* ===== GALERIE : interactions (flèches du carrousel, ouverture de la lightbox) ===== */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-lb],[data-sc]');if(!b)return;
if(b.hasAttribute('data-sc')){var t2=$('trk');t2.scrollBy({left:b.getAttribute('data-sc')*t2.clientWidth*.8,behavior:'smooth'})}
else{var s=b.getAttribute('data-set').split(',');lbOpen(s,s.indexOf(b.getAttribute('data-lb')),b)}});
