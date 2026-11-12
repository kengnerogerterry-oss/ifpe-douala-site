/* Lightbox */

/* [MODIF 6] lbShow() utilise mediaOf() (js/posters.js) : l’image peut venir de DATA.posters (page filière) ou de DATA.photos (galerie). */

/* ===== LIGHTBOX : clic, clavier (Échap, flèches, Tab), clic extérieur, swipe ===== */
var lb={el:null,ids:[],i:0,from:null,x:0,y:0};
function lbBuild(){var e=lb.el=document.createElement('div');e.id='lb';e.hidden=true;e.setAttribute('role','dialog');e.setAttribute('aria-modal','true');
e.innerHTML='<button type="button" class="lx" data-a="x">×</button><button type="button" class="lp" data-a="p">‹</button><figure><img alt=""><figcaption></figcaption></figure><button type="button" class="ln" data-a="n">›</button>';
e.addEventListener('click',function(ev){var a=ev.target.getAttribute('data-a');if(a=='x'||ev.target===e||ev.target.tagName=='FIGURE')lbClose();else if(a)lbStep(a=='n'?1:-1)});
e.addEventListener('pointerdown',function(ev){lb.x=ev.clientX;lb.y=ev.clientY});
e.addEventListener('pointerup',function(ev){if(ev.pointerType=='mouse')return;var dx=ev.clientX-lb.x,dy=ev.clientY-lb.y;
if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))lbStep(dx<0?1:-1);else if(dy>90)lbClose()});
document.body.appendChild(e)}
function lbShow(){var p=mediaOf(lb.ids[lb.i]),im=lb.el.querySelector('img'),b=lb.el.querySelectorAll('button'),many=lb.ids.length>1;
im.src=p.src;im.alt=altOf(p);lb.el.querySelector('figcaption').textContent=p.cap?tr(p.cap):'';lb.el.setAttribute('aria-label',altOf(p));
b[0].setAttribute('aria-label',t('closeL'));b[1].setAttribute('aria-label',t('prevL'));b[2].setAttribute('aria-label',t('nextL'));b[1].hidden=b[2].hidden=!many}
function lbStep(s){lb.i=(lb.i+s+lb.ids.length)%lb.ids.length;lbShow()}
function lbOpen(ids,i,from){if(!lb.el)lbBuild();lb.ids=ids;lb.i=Math.max(i,0);lb.from=from;lbShow();lb.el.hidden=false;document.body.style.overflow='hidden';lb.el.querySelector('.lx').focus()}
function lbClose(){lb.el.hidden=true;document.body.style.overflow='';if(lb.from&&document.contains(lb.from))lb.from.focus()}
document.addEventListener('keydown',function(e){if(!lb.el||lb.el.hidden)return;
if(e.key=='Escape')lbClose();else if(e.key=='ArrowRight')lbStep(1);else if(e.key=='ArrowLeft')lbStep(-1);
else if(e.key=='Tab'){var b=[].filter.call(lb.el.querySelectorAll('button'),function(x){return!x.hidden}),k=b.indexOf(document.activeElement);e.preventDefault();b[(k+(e.shiftKey?-1:1)+b.length)%b.length].focus()}});
