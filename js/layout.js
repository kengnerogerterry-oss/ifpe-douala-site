/* En-tête, navigation, pied de page, cartes */

var NAV=['','institut','formations','galerie','campus','faq','contact'];
var LOGO_ICON='assets/img/logo-icon.png',LOGO_FULL='assets/img/logo-complet.png';
var LOGO='<img src="'+LOGO_ICON+'" alt="" width="34" height="38" style="display:block;height:38px;width:auto">';
function nav(h){$('nv').classList.remove('open');var hh=h.indexOf('filiere-')==0?'formations':h;
$('nv').setAttribute('aria-label',t('nav'));
$('nv').innerHTML='<a class="logo" href="#" aria-label="'+t('logo')+'">'+LOGO+'<span><b>IFPE</b><small>DOUALA</small></span></a><div class="nl" id="nl">'+NAV.map(function(x,i){return '<a href="#'+x+'"'+((hh==x||hh.indexOf(x+'-')==0&&x)?' class="on" aria-current="page"':'')+'>'+t('n'+i)+'</a>'}).join('')+'</div><span class="lg" role="group" aria-label="'+t('lang')+'">'+LANGS.map(function(l,i){return '<button type="button" data-l="'+i+'" lang="'+l+'" aria-pressed="'+(i==L)+'">'+LBL[i]+'</button>'}).join('')+'</span><button type="button" class="mb" aria-expanded="false" aria-controls="nl" aria-label="'+t('menu')+'"><i></i></button>'}
function foot(){$('ft').innerHTML='<div class="fg"><div><span class="fl"><img src="'+LOGO_FULL+'" alt="IFPE Douala — Le savoir devient métier"></span><br><b>IFPE Douala</b><br>'+t('fOrg')+'<br><em>'+t('fSlog')+'</em><br><br>'+t('authB',{a:t('auth')})+'</div>'
+'<div><b>Contact</b><br>'+CFG.tel.map(function(x){return '<a href="tel:'+x+'">'+fmt(x)+'</a>'}).join('<br>')+'<br><a href="mailto:'+CFG.mail+'">'+CFG.mail+'</a></div>'
+'<div><b>'+t('fSoc')+'</b><br><a target="_blank" rel="noopener noreferrer" href="'+CFG.fbu+'">Facebook : '+CFG.fb+'</a></div></div>'}
function cardPic(d){return '<span class="ct">'+visual(d,'')+'</span>'}
function dcard(d){return '<a class="cd tc '+d.v+' rev" href="#filiere-'+d.s+'">'+cardPic(d)+'<span class="dn">'+d.i+'</span><h3>'+tr(d.n)+'</h3><span class="tag">'+t('nprog',{n:d.f.length})+'</span><p class="mu" style="font-size:.9rem;margin:.6em 0 0">'+d.f.slice(0,3).map(function(x){return tr(x)}).join(' · ')+(d.f.length>3?'…':'')+'</p></a>'}
function ccard(c){return '<a class="cd rev" href="#'+c.s+'"><span class="k">'+c.v+'</span><h3>'+tr(c.n)+'</h3><p class="mu" style="font-size:.9rem;margin:0">'+tr(c.a)+'</p></a>'}
