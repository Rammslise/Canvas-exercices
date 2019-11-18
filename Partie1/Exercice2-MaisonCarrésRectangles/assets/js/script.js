let c = document.getElementById('house');
let ctx = c.getContext('2d');
// Toit
//save() permet de sauvegarder l’état d’un canevas.
ctx.save();
//On déplace le point d'origine du canevas.
ctx.translate(199, -150);
// Ajoute une rotation à la matrice de transformation.
ctx.rotate((Math.PI / 180) * 45);
ctx.fillStyle ='#d0824d';
ctx.fillRect(250,100,150,150);
//restore() permet de retourner à cet état après avoir effectué une transformation.
ctx.restore();
// Fond
ctx.fillStyle = '#a7d8e4';
ctx.fillRect(200,200,200,200);
// Porte et fenêtres
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(282,330,40,70); // porte
ctx.fillRect(220,220,40,40); // fenêtre gauche
ctx.fillRect(340,220,40,40); // fenêtre droite
