let c = document.getElementById('house');
let ctx = c.getContext('2d');

// Voiture
ctx.fillStyle = '#00af59';
ctx.fillRect(100,100,250,100);

// refaire un fill style pour d'autres rectangles.
ctx.fillStyle = '#ffffff';
ctx.fillRect(100,100,60,50);
ctx.fillRect(290,100,60,50);

// Roue de gauche
ctx.beginPath();
ctx.arc(120,230,30,0,Math.PI*2,true);
ctx.strokeStyle = '#717171';
ctx.fillStyle = '#cdcdcd';
ctx.fill();
ctx.stroke();

// Roue de droite
ctx.beginPath();
ctx.arc(330,230,30,0,Math.PI*2,true);
ctx.strokeStyle = '#717171';
ctx.fillStyle = '#cdcdcd';
ctx.fill();
ctx.stroke();
