let c = document.getElementById('icecream');
let ctx = c.getContext('2d');
//Cône
ctx.beginPath();
ctx.moveTo(400,200);
ctx.lineTo(300,400);
ctx.lineTo(200,200);
ctx.closePath();
ctx.fillStyle ='#aa6522';
ctx.fill();
// Boule de glace
ctx.beginPath();
//courbe commence au point spécifié par moveTo(210,200).
ctx.moveTo(210,200);
//Le point de contrôle est placé à (340, 10). La courbe s'achève en (390, 200).
ctx.quadraticCurveTo(340,10,390,200);
ctx.closePath();
ctx.fillStyle = '#8a0908';
ctx.fill();
