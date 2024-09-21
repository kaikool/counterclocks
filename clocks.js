const canvas = document.getElementById('clock-canvas');
const ctx = canvas.getContext('2d');
const clockTime = document.getElementById('clock-time');

function drawClock() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 90, 0, 2 * Math.PI);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 5;
  ctx.stroke();

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, 2 * Math.PI);
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#333';
  ctx.fillText(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`, canvas.width / 2, canvas.height / 2);

  clockTime.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(drawClock, 1000);
