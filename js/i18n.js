/* Langues et traductions */

/* [MODIF 4 – TEXTE] « Le savoir devient métier » → « Le savoir devient un métier » (version française uniquement)
   Clés modifiées : desc, h1, hInst, promP, fSlog (+ meta description dans index.html et alt du logo dans layout.js).
   Dans h1, « un » est placé avant <em> : seul « métier. » garde le dégradé orange, le design reste identique.
   [MODIF 2 – MODE SOMBRE] Clé ajoutée : dark (libellé du bouton bascule, FR|EN|ZH). */

/* ===== LANGUES : français (0), anglais (1), chinois (2) — textes au format « fr|en|zh » ===== */
var LANGS=['fr','en','zh'],LBL=['FR','EN','中文'],L=0;
try{var sv=localStorage.getItem('ifpe-lang');if(LANGS.indexOf(sv)>-1)L=LANGS.indexOf(sv)}catch(e){}
var T={
nav:'Navigation principale|Main navigation|主导航',menu:'Menu|Menu|菜单',dark:'Mode sombre|Dark mode|深色模式',lang:'Langue|Language|语言',logo:'IFPE Douala — accueil|IFPE Douala — home|IFPE 杜阿拉 — 首页',
n0:'Accueil|Home|首页',n1:'L’Institut|The Institute|学院简介',n2:'Formations|Programmes|培训课程',n3:'Galerie|Gallery|图库',n4:'Campus|Campuses|校区',n5:'FAQ|FAQ|常见问题',n6:'Contact|Contact|联系我们',
kGal:'Galerie|Gallery|图库',hGal:'La galerie|The gallery|图库',pGal:'Touchez une image pour l’agrandir.|Tap an image to enlarge it.|点击图片可放大。',
fAll:'Toutes|All|全部',fInst:'Découvrir l’institut|Discover the institute|探索学院',fAria:'Filtrer par filière|Filter by field|按专业筛选',
altP:'Affiche de la filière {x}|Poster for the {x} field|{x} 专业海报',also:'Également proposé|Also offered|另开设',
zoom:'Agrandir|Enlarge|放大',prevL:'Précédent|Previous|上一张',nextL:'Suivant|Next|下一张',closeL:'Fermer|Close|关闭',
desc:'IFPE Douala : 9 filières de formation professionnelle, 6 campus à Douala. Le savoir devient un métier.|IFPE Douala: 9 fields of vocational training and 6 campuses in Douala. Knowledge becomes a career.|IFPE 杜阿拉：9 个职业培训专业，杜阿拉共 6 个校区。知识成就职业。',
auth:'N°00234/MINEFOP/SG/DFOP/SDGSF/CSACD/CBAC du 02 mai 2024|No. 00234/MINEFOP/SG/DFOP/SDGSF/CSACD/CBAC of 2 May 2024|编号 00234/MINEFOP/SG/DFOP/SDGSF/CSACD/CBAC，2024年5月2日',
authB:'Autorisation {a}|Authorisation {a}|批准文号 {a}',
heroK:'IFPE Douala · Formation professionnelle|IFPE Douala · Vocational training|IFPE 杜阿拉 · 职业培训',
h1:'Le savoir devient un <em>métier.</em>|Knowledge becomes a <em>career.</em>|知识成就<em>职业。</em>',
heroP:'Avancez vers votre métier : {d} filières de formation, {f} spécialités pratiques et {c} campus à Douala. Explorez les formations et échangez avec notre équipe.|Move towards your career: {d} fields of study, {f} hands-on specialties and {c} campuses in Douala. Explore our programmes and talk to our team.|迈向您的职业：{d} 个培训专业、{f} 个实践专业方向，以及位于杜阿拉的 {c} 个校区。了解我们的课程，与团队交流。',
bDisc:'Découvrir les formations|Explore programmes|了解培训课程',bCamp:'Trouver mon campus|Find my campus|查找我的校区',
g1:'Maintenance, IA, marketing digital|Maintenance, AI, digital marketing|维护、人工智能、数字营销',g2:'Électricité, froid, électronique|Electricity, refrigeration, electronics|电气、制冷、电子',g3:'Soins infirmiers, laboratoire…|Nursing, laboratory…|护理、实验室…',
s1:'Filières|Fields|专业',s1d:'De la mécanique au paramédical.|From mechanics to paramedical care.|从机械到医疗辅助。',s2:'Spécialités|Specialties|专业方向',s2d:'Des formations tournées vers un métier.|Training geared towards a career.|面向职业的培训。',s3:'Campus|Campuses|校区',s3d:'Répartis dans Douala.|Spread across Douala.|分布于杜阿拉各地。',
kForm:'Formations|Programmes|培训课程',hDom:'Choisissez votre filière|Choose your field|选择您的专业',
kCamp:'Campus|Campuses|校区',hCamp:'Six campus à Douala|Six campuses in Douala|杜阿拉的六个校区',
kCont:'Contact|Contact|联系我们',hCont:'Une question ? Parlons-en.|Any questions? Let’s talk.|有疑问？欢迎联系我们。',
pCont:'Appelez le secrétariat ou écrivez-nous : nous vous orientons vers la formation et le campus qui vous conviennent.|Call the secretariat or write to us: we will guide you to the programme and campus that suit you.|请致电秘书处或给我们留言，我们将为您推荐合适的课程和校区。',
nprog:'{n} spécialités|{n} specialties|{n} 个专业方向',
wa:'Écrire sur WhatsApp|Message us on WhatsApp|通过 WhatsApp 联系',map:'Voir sur la carte|View on map|查看地图',
kInst:'L’Institut|The Institute|学院简介',hInst:'Le savoir devient un métier.|Knowledge becomes a career.|知识成就职业。',
pInst:'L’IFPE — Institut de Formation Professionnelle pour l’Emploi — Douala propose des formations pratiques réparties en {d} filières ({l}) sur {c} campus à Douala.|IFPE — Institute of Vocational Training for Employment — Douala offers hands-on programmes across {d} fields ({l}) on {c} campuses in Douala.|IFPE（就业职业培训学院）杜阿拉校区提供实践性培训，涵盖 {d} 个专业（{l}），设有 {c} 个校区。',
promT:'Notre promesse|Our promise|我们的承诺',promP:'« Le savoir devient un métier » et « Avancez vers votre métier » : des compétences concrètes pour entrer dans l’emploi.|“Knowledge becomes a career” and “Move towards your career”: practical skills to enter the job market.|“知识成就职业”与“迈向您的职业”：以实用技能助您步入职场。',
recT:'Reconnaissance|Official recognition|官方认可',recP:'Autorisation {a}.|Authorisation {a}.|批准文号 {a}。',
noteInst:'Mission, vision, valeurs et approche pédagogique : contenus officiels à fournir par la direction.|Mission, vision, values and teaching approach: official content to be provided by the management.|使命、愿景、价值观和教学理念：官方内容有待校方提供。',
kCat:'Catalogue|Catalogue|课程目录',hForm:'Les formations|Programmes|培训课程',subForm:'{d} filières, {f} spécialités.|{d} fields, {f} specialties.|{d} 个专业，{f} 个专业方向。',
ph:'Rechercher une spécialité…|Search a specialty…|搜索专业方向…',aSearch:'Rechercher|Search|搜索',aDom:'Filière|Field|专业',allDom:'Toutes les filières|All fields|所有专业',reset:'Réinitialiser|Reset|重置',
noteForm:'Durée, frais et disponibilité par campus : à confirmer auprès du secrétariat.|Duration, fees and availability by campus: to be confirmed with the secretariat.|学制、费用及各校区开设情况：请向秘书处确认。',
seeDom:'Voir la filière →|View field →|查看该专业 →',none:'Aucun résultat.|No results.|没有结果。',
kLoc:'Implantations|Locations|校区分布',hLoc:'Nos campus|Our campuses|我们的校区',pLoc:'Six campus à Douala pour se former près de chez soi.|Six campuses in Douala to train close to home.|杜阿拉共有六个校区，方便就近学习。',
hFaq:'Questions fréquentes|Frequently asked questions|常见问题',
q1:'L’IFPE est-il officiellement autorisé ?|Is IFPE officially authorised?|IFPE 是否获得官方批准？',a1:'L’IFPE Douala indique sur sa bannière l’autorisation {a}.|IFPE Douala displays the authorisation {a} on its banner.|IFPE 杜阿拉在其宣传横幅上标明了批准文号：{a}。',
q2:'Combien de campus, et où ?|How many campuses, and where?|共有几个校区，分别在哪里？',a2:'L’IFPE compte {c} campus à Douala : {l}. Les adresses détaillées sont sur la page Campus.|IFPE has {c} campuses in Douala: {l}. Detailed addresses are on the Campuses page.|IFPE 在杜阿拉设有 {c} 个校区：{l}。详细地址见“校区”页面。',
q3:'Comment contacter l’IFPE ?|How can I contact IFPE?|如何联系 IFPE？',a3:'Par téléphone : {t} ; par e-mail : {m}.|By phone: {t}; by e-mail: {m}.|电话：{t}；邮箱：{m}。',
q4:'Les frais sont-ils indiqués ?|Are the fees shown?|是否标明费用？',a4:'Les frais ne sont affichés que lorsqu’ils sont officiellement renseignés. Contactez le secrétariat.|Fees are only shown once officially provided. Please contact the secretariat.|费用仅在官方确认后才会公布，请联系秘书处。',
hJoin:'Nous joindre|Get in touch|联系我们',sec:'Secrétariat IFPE Douala|IFPE Douala secretariat|IFPE 杜阿拉秘书处',mail:'E-mail :|E-mail:|邮箱：',fb:'Facebook :|Facebook:|Facebook：',
backF:'← Formations|← Programmes|← 培训课程',kDom:'Filière {i}|Field {i}|专业 {i}',nprog1:'{n} spécialité(s)|{n} specialty(ies)|{n} 个专业方向',
noteDom:'Durée, frais, conditions d’accès, débouchés et campus proposant chaque spécialité : à confirmer auprès du secrétariat.|Duration, fees, entry requirements, career prospects and the campuses offering each specialty: to be confirmed with the secretariat.|学制、费用、入学条件、就业方向及各专业方向开设校区：请向秘书处确认。',
backC:'← Campus|← Campuses|← 校区',addr:'Adresse :|Address:|地址：',
noteCamp:'Horaires et spécialités proposées dans ce campus : à confirmer auprès du secrétariat.|Opening hours and specialties offered at this campus: to be confirmed with the secretariat.|开放时间及该校区开设的专业方向：请向秘书处确认。',allProg:'Voir toutes les formations →|View all programmes →|查看所有课程 →',
nf:'Page introuvable|Page not found|页面未找到',home:'Retour à l’accueil|Back to home|返回首页',
fOrg:'Institut de Formation Professionnelle pour l’Emploi|Institute of Vocational Training for Employment|就业职业培训学院',fSlog:'Le savoir devient un métier|Knowledge becomes a career|知识成就职业',
fSoc:'Réseaux sociaux|Social media|社交媒体',fLink:'Lien officiel à renseigner.|Official link to be added.|官方链接待补充。',
w1:'Bonjour, je souhaite obtenir des informations sur les formations de l’IFPE Douala.|Hello, I would like information about the programmes at IFPE Douala.|您好，我想了解 IFPE 杜阿拉的培训课程。',
w2:'Campus : {x}.|Campus: {x}.|校区：{x}。',w3:'Filière : {x}.|Field: {x}.|专业：{x}。',w4:'Pourriez-vous m’orienter, s’il vous plaît ?|Could you please guide me?|请问能给我一些指引吗？'};
var t=function(k,v){var s=T[k].split('|')[L];if(v)for(var x in v)s=s.split('{'+x+'}').join(v[x]);return s},tr=function(s){return s.split('|')[L]};
var SEP=function(){return L==2?'、':', '};
