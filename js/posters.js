/* Rendu des affiches et visuels */

/* ===== AFFICHES : rendu ===== */
var posterOf=function(s){return DATA.posters.filter(function(p){return p.d===s})};
var idsOf=function(ps){return ps.map(function(p){return p.id}).join(',')};
function altOf(p){var d=p.d&&gd(p.d);return d?t('altP',{x:tr(d.n)}):tr(p.alt)}
function thumb(p,ids){var a=altOf(p);return '<button type="button" class="th" style="--ar:'+(p.w/(p.h*(1-p.crop))).toFixed(3)+'" data-lb="'+p.id+'" data-set="'+ids+'" aria-label="'+t('zoom')+' — '+a+'"><img src="'+p.src+'" alt="'+a+'" width="'+p.w+'" height="'+p.h+'" loading="lazy" decoding="async"></button>'}
function visual(d,alt){var v=DATA.visuals[d.s];return '<span class="vz"><img class="vb" src="'+v+'" alt="" aria-hidden="true"><img class="vf" src="'+v+'" alt="'+alt+'" loading="lazy" decoding="async"></span>'}
/* Page d'une filière : affiche(s) + uniquement les spécialités absentes de l'affiche */
function progs(m){var ps=posterOf(m.s),list=function(a){return a.map(function(x){return '<li>'+tr(x)+'</li>'}).join('')};
if(!ps.length)return '<div class="pg"><div class="vp">'+visual(m,tr(m.n))+'</div></div><ul class="ls">'+list(m.f)+'</ul>';
var ex=(DATA.extra[m.s]||[]).map(function(i){return m.f[i]});
return '<div class="pg">'+ps.map(function(p){return thumb(p,idsOf(ps))}).join('')+'</div>'+(ex.length?'<h2 class="sub">'+t('also')+'</h2><ul class="ls">'+list(ex)+'</ul>':'')}
