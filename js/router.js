/* Routeur, animations au défilement, initialisation */

var CUR=(location.hash||'#').slice(1);
function route(keep){if(lb.el&&!lb.el.hidden)lbClose();var h=CUR,r,m;
if(h.indexOf('filiere-')==0){m=gd(h.slice(8));r=m?function(){return '<section><div class="w dc" style="'+tcs(m)+'"><a href="#formations">'+t('backF')+'</a><span class="k" style="display:block;margin-top:14px">'+t('kDom',{i:m.i})+'</span><h1>'+tr(m.n)+'</h1><p class="mu">'+t('nprog1',{n:m.f.length})+'</p>'+progs(m)+'<div class="note">'+t('noteDom')+'</div><div class="row2">'+telBtns(true)+waBtn(null,m)+'</div></div></section>'}:null}
else if(h.indexOf('campus-')==0){m=gc(h);r=m?function(){return '<section><div class="w"><a href="#campus">'+t('backC')+'</a><span class="k" style="display:block;margin-top:14px">'+m.v+'</span><h1>'+tr(m.n)+'</h1><p class="mu" style="max-width:640px"><b>'+t('addr')+'</b> '+tr(m.a)+', Douala.</p><div class="row2"><a class="btn o" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(m.a.split('|')[0]+', Douala, Cameroun')+'">'+t('map')+'</a>'+telBtns(true)+waBtn(m,null)+'</div><div class="note">'+t('noteCamp')+'</div><a href="#formations">'+t('allProg')+'</a></div></section>'}:null}
else r=P[h];
if(!r)r=function(){return '<section><div class="w"><h1>'+t('nf')+'</h1><a class="btn" href="#">'+t('home')+'</a></div></section>'};
document.documentElement.lang=LANGS[L];document.querySelector('meta[name=description]').setAttribute('content',t('desc'));
nav(h);foot();$('app').innerHTML=r();if(keep!==true)window.scrollTo(0,0);
var ni=NAV.indexOf(h.indexOf('filiere-')==0?'formations':h);document.title='IFPE Douala — '+(ni>-1?t('n'+ni):h);bind();rv()}
function rv(){if(!('IntersectionObserver' in window))return;var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('#app h2,#app .cd,#app .note,#app .gi,#app .pg>*').forEach(function(x,i){x.classList.add('rv');x.style.transitionDelay=(i%4)*70+'ms';o.observe(x)})}
function bind(){var a=$('app'),q;
if(q=$('q')){q.oninput=function(){fl.q=q.value;var p=q.selectionStart;a.innerHTML=P.formations();$('q').focus();$('q').setSelectionRange(p,p);bind()};$('d').onchange=function(){fl.d=this.value;route(true)};$('rz').onclick=function(){fl={q:'',d:''};route(true)}}}
$('nv').addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('button[data-l]');if(!b)return;L=+b.getAttribute('data-l');try{localStorage.setItem('ifpe-lang',LANGS[L])}catch(x){}route(true);var nb=$('nv').querySelector('button[data-l="'+L+'"]');if(nb)nb.focus()});
function go(x,push){CUR=x;if(push){try{history.pushState(null,'','#'+x)}catch(e){}}route()}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();go(a.getAttribute('href').slice(1),true)});
function sync(){var x=(location.hash||'#').slice(1);if(x!==CUR)go(x,false)}
window.addEventListener('hashchange',sync);window.addEventListener('popstate',sync);route();
