// fill () permet de remplir et stroke () permet de tracer le contour.
let c = document.getElementById('house'); //permet d'aller chercher et cibler l'élément <canvas> identifié par son attribut id unique (ici house).
let ctx = c.getContext('2d'); // puis la méthode getContext() de l'élément ainsi récupéré pour savoir dans quel contexte de dessin (2D ou 3D) le script va pouvoir agir, et de quelles fonctions il pourra disposer.
// fillRect(startx, starty, hauteur, largeur).
// Fond
// beginPath() pour démarrer un nouveau trajet de forme.
ctx.beginPath();
// moveTo() pour déplacer le point de départ à la position désirée.
ctx.moveTo(200,400);
ctx.lineTo(200,200);
ctx.lineTo(400,200);
ctx.lineTo(400,400);
// closePath() fermeture du chemin (facultatif).
ctx.closePath();
ctx.fillStyle = '#a7d8e4';
ctx.fill();
// Porte et fenêtres
ctx.beginPath();
ctx.moveTo(282,330);
ctx.lineTo(322,330);
ctx.lineTo(322,400);
ctx.lineTo(282,400);
//Fenêtre gauche
ctx.moveTo(220,220);
ctx.lineTo(260,220);
ctx.lineTo(260,260);
ctx.lineTo(220,260);
// Fenêtre droite
ctx.moveTo(340,220);
ctx.lineTo(380,220);
ctx.lineTo(380,260);
ctx.lineTo(340,260);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();
// Toit
ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(300,50);
ctx.lineTo(200,200);
ctx.closePath();
ctx.fillStyle ='#d0824d';
ctx.fill();
