const londonCanvas = document.getElementById('london-canvas');
const londonCtx = londonCanvas.getContext('2d');
const londonTime = document.getElementById('london-time');
const londonCountdown = document.getElementById('london-countdown');

const tokyoCanvas = document.getElementById('tokyo-canvas');
const tokyoCtx = tokyoCanvas.getContext('2d');
const tokyoTime = document.getElementById('tokyo-time');
const tokyoCountdown = document.getElementById('tokyo-countdown');

const newYorkCanvas = document.getElementById('new-york-canvas');
const newYorkCtx = newYorkCanvas.getContext('2d');
const newYorkTime = document.getElementById('new-york-time');
const newYorkCountdown = document.getElementById('new-york-countdown');

// Set market opening times
const londonOpenTime = new Date('2023-03-01T08:00:00.000Z'); // 8:00 AM London time
const tokyoOpenTime = new Date('2023-03-01T00:00:00.000Z'); // 12:00 AM Tokyo time
const newYorkOpenTime = new Date('2023-03-01T13:00:00.000Z'); // 8:00 AM New York time

function drawClock(canvas, ctx, timeElement, countdownElement, openTime) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 90, 0, 2 * Math.PI);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 5;
  ctx.stroke();

  const now = new Date();
  const timeDiff = openTime.getTime() - now.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#333';
  ctx.fillText(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`, canvas.width / 2, canvas.height / 2);

  timeElement.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  countdownElement.innerText = `${days} days : ${hours.toString().padStart(2, '0')} hours : ${minutes.toString().padStart(2, '0')} min : ${seconds.toString().padStart(2, '0')} sec`;
}

setInterval(() => {
  drawClock(londonCanvas, londonCtx, londonTime, londonCountdown, londonOpenTime);
  drawClock(tokyoCanvas, tokyoCtx, tokyoTime, tokyoCountdown, tokyoOpenTime);
  drawClock(newYorkCanvas, newYorkCtx, newYorkTime, newYorkCountdown, newYorkOpenTime);
}, 1000);
