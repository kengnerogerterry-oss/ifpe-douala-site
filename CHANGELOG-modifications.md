# Modifications — repères `[MODIF n]` dans le code

| N° | Sujet | Fichiers |
|----|-------|----------|
| 2 | Mode sombre (bouton, préférence système, localStorage, transitions) | index.html (script anti-flash, liens), css/base.css (variables), css/gallery.css, css/responsive.css, **css/theme.css** (nouveau), **js/theme.js** (nouveau), js/layout.js (bouton), js/i18n.js (clé `dark`) |
| 3 | Responsive vérifié : 8 largeurs (320→1440 px) × 2 thèmes × 10 pages, aucun débordement | css/theme.css §5 (barre compactée ≤ 400 px et ≤ 350 px) |
| 4 | « Le savoir devient **un** métier » | js/i18n.js (desc, h1, hInst, promP, fSlog), index.html, js/layout.js (alt du logo) |
| 5 | Adresses Cité SIC, Bonamoussadi, Bonabéri, Dakar (FR/EN/ZH) ; visuels de filière qui remplissent leur cadre | js/data.js, js/posters.js, css/gallery.css |
| 6 | Galerie : photos de la rentrée solennelle uniquement | js/gallery.js, js/media-data.js, js/lightbox.js, js/posters.js ; fichiers supprimés : affiches p1, p3, p4, p5 |

## Mise à jour des images de filière
Nouvelles affiches dans `assets/img/filieres/` (une par filière ; Informatique et Gestion partagent `informatique-gestion.jpg`), références dans `DATA.visuals` (js/media-data.js). `genie-civil-electrique.jpg` supprimé (Génie civil et Génie électrique ont désormais chacun leur image).

## Correctif galerie (images qui ne se chargent pas)
- js/posters.js, js/gallery.js : photos de la galerie chargées sans `loading="lazy"`.
- js/router.js : `.gi` retiré de l'animation d'apparition (plus de photo invisible).
- index.html : `?v=3` ajouté aux CSS/JS pour éviter le mélange ancien/nouveau fichier en cache.

## Sécurité
- index.html : CSP (meta) + referrer-policy ; empreinte sha256 du script inline du thème.
- js/helpers.js `esc()` + js/pages.js : valeur du champ de recherche échappée ; js/router.js : `#__proto__`, `#constructor`… ignorés.
- Nouveaux : `_headers` (Netlify / Cloudflare Pages), `.htaccess` (Apache : CSP, nosniff, anti-iframe, HSTS, .git masqué).
