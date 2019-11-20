let c = document.getElementById('GingerbreadMan');
let ctx = c.getContext('2d');
// Visage
ctx.beginPath();
ctx.fillStyle = '#976f0f';
ctx.arc(200,110,50,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();
// Bouche
ctx.beginPath();
ctx.strokeStyle = '#fe0000';
// Inférieur
ctx.moveTo(220,120);
ctx.quadraticCurveTo(200,150,180,120);
// Supérieur
ctx.moveTo(220,120);
ctx.quadraticCurveTo(200,140,180,120);
ctx.stroke();
// Yeux
ctx.beginPath();
ctx.fillStyle = '#ffffff';
// Droit
ctx.arc(220,95,9,0,Math.PI*2,false);
ctx.fill();
// Gauche
ctx.arc(180,95,9,0,Math.PI*2,false);
ctx.fill();
// Sourcils
ctx.beginPath();
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = '2';
// Droit
ctx.moveTo(210,75);
ctx.quadraticCurveTo(220,65,230,75);
// Gauche
ctx.moveTo(190,75);
ctx.quadraticCurveTo(180,65,170,75);
ctx.stroke();
// Bras
ctx.beginPath();
ctx.fillStyle = '#976f0f';
ctx.fillRect(95,150,210,40);
// Droit
ctx.moveTo(305,190);
ctx.quadraticCurveTo(370,170,305,150);
// Gauche
ctx.moveTo(95,150);
ctx.quadraticCurveTo(30,170,95,190);
ctx.fill();
// Corps
ctx.beginPath();
ctx.fillStyle = '#976f0f';
ctx.fillRect(150,150,100,170);
// Jambe droite
ctx.moveTo(150,320);
ctx.quadraticCurveTo(170,370,190,320);
// Jambre gauche
ctx.moveTo(250,320);
ctx.quadraticCurveTo(230,370,210,320);
ctx.fill();
// Entrejambes
ctx.beginPath();
ctx.fillStyle = '#ffffff';
ctx.moveTo(190,320);
ctx.quadraticCurveTo(200,220,210,320);
ctx.fill();
// Boutons
ctx.beginPath();
ctx.fillStyle = '#7a2976';
// Haut
ctx.arc(200,200,9,0,Math.PI*2,false);
ctx.fill();
// Bas
ctx.arc(200,235,9,0,Math.PI*2,false);
ctx.fill();
