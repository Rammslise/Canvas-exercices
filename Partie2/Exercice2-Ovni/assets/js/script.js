let c = document.getElementById('ufo');
let ctx = c.getContext('2d');
// Fond
ctx.fillStyle = '#0000ff';
//on met les points x et y à 0 pour que tout le carré soit pris.
ctx.fillRect(0,0,400,400);
//Scaphandre
ctx.save();
ctx.beginPath();
ctx.moveTo(150,180);
ctx.quadraticCurveTo(200,70,250,180);
ctx.closePath();
ctx.fillStyle = '#ffffff';
ctx.fill();
// Soucoupe
ctx.restore();
ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,270,300,200);
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,140,300,200);
ctx.fillStyle = '#e0e1f3';
ctx.fill();
