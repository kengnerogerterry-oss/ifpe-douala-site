/* Galerie : filtres, carrousel, interactions */

/* ===== GALERIE : filtres + carrousel ===== */
var gal={f:'all'};
function galPosters(){return DATA.posters.filter(function(p){return gal.f=='all'||(gal.f=='inst'?!p.d:p.d===gal.f)})}
function galChips(){var cs=[['all',t('fAll')],['inst',t('fInst')]].concat(D.filter(function(d){return posterOf(d.s).length}).map(function(d){return [d.s,tr(d.n)]}));
return cs.map(function(c){return '<button type="button" class="chip" data-gf="'+c[0]+'" aria-pressed="'+(gal.f==c[0])+'">'+c[1]+'</button>'}).join('')}
function galTrack(){var ps=galPosters(),ids=idsOf(ps);return ps.map(function(p){return '<figure class="gi">'+thumb(p,ids)+(p.cap?'<figcaption>'+tr(p.cap)+'</figcaption>':'')+'</figure>'}).join('')}
P.galerie=function(){return '<section><div class="w"><span class="k">'+t('kGal')+'</span><h1>'+t('hGal')+'</h1><p class="mu">'+t('pGal')+'</p><div class="chips" role="group" aria-label="'+t('fAria')+'">'+galChips()+'</div><div class="car"><button type="button" class="ar" data-sc="-1" aria-label="'+t('prevL')+'">‹</button><div class="trk" id="trk" tabindex="0">'+galTrack()+'</div><button type="button" class="ar" data-sc="1" aria-label="'+t('nextL')+'">›</button></div></div></section>'};

/* ===== GALERIE / AFFICHES : interactions (filtres, flèches, ouverture lightbox) ===== */
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-gf],[data-lb],[data-sc]');if(!b)return;
if(b.hasAttribute('data-gf')){gal.f=b.getAttribute('data-gf');document.querySelector('#app .chips').innerHTML=galChips();var k=$('trk');k.innerHTML=galTrack();k.scrollLeft=0;rv()}
else if(b.hasAttribute('data-sc')){var t2=$('trk');t2.scrollBy({left:b.getAttribute('data-sc')*t2.clientWidth*.8,behavior:'smooth'})}
else{var s=b.getAttribute('data-set').split(',');lbOpen(s,s.indexOf(b.getAttribute('data-lb')),b)}});
