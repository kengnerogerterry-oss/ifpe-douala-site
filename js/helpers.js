/* Utilitaires : slug, formats, WhatsApp, téléphone */

/* [SÉCURITÉ] Échappe &, <, >, " et ' avant toute insertion dans du HTML généré */
var esc=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')};
var slug=function(x){return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')};
var VAR=['tb','to','tn'];
D.forEach(function(d,i){d.s=slug(d.n.split('|')[0]);d.i=('0'+(i+1)).slice(-2);d.v=VAR[i%3]});
function tcs(d){return '--wk:'+(d.v=='to'?'#9a4f06':'#0d4f8b')+';--wb:'+(d.v=='to'?'#d9700a':'#f39a1e')}
var NF=D.reduce(function(a,d){return a+d.f.length},0);
var fl={q:'',d:''};
var $=function(i){return document.getElementById(i)},gc=function(s){return C.filter(function(x){return x.s==s})[0]},gd=function(s){return D.filter(function(x){return x.s==s})[0]};
var fmt=function(p){return p.replace(/^\+237(\d{3})(\d{2})(\d{2})(\d{2})$/,'+237 $1 $2 $3 $4')};
function wa(c,d){var n=CFG.wa.replace(/\D/g,'');if(!n)return '';
var m=[t('w1')];if(c)m.push(t('w2',{x:tr(c.n)+' ('+c.v+')'}));if(d)m.push(t('w3',{x:tr(d.n)}));m.push(t('w4'));
return 'https://wa.me/'+n+'?text='+encodeURIComponent(m.join(' '))}
function waBtn(c,d){var u=wa(c,d);return u?'<a class="btn" target="_blank" rel="noopener noreferrer" href="'+u+'">'+t('wa')+'</a>':''}
function telBtns(o){return CFG.tel.map(function(x){return '<a class="btn'+(o?' o':'')+'" href="tel:'+x+'">'+fmt(x)+'</a>'}).join('')}
