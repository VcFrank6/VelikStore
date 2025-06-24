const canvas = document.getElementById('sparkleCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas a toda la pantalla
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Array para guardar los brillitos
let sparkles = [];

// Detectar movimiento del mouse
document.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 5; i++) {
    sparkles.push({
      x: e.clientX + (Math.random() - 0.5) * 10,
      y: e.clientY + (Math.random() - 0.5) * 10,
      size: Math.random() * 0.6 + 0.2,
      alpha: 1,
      life: 0
    });
  }
});

// Animar los brillitos
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sparkles.forEach((s, i) => {
    ctx.beginPath();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = 'gold';
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();

    s.y -= 0.5;
    s.alpha -= 0.02;
    s.life++;

    if (s.alpha <= 0 || s.life > 50) {
      sparkles.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
