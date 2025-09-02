function formatTime(date, timeZone) {
  return date.toLocaleTimeString('en-US', {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

function updateClocks() {
  const now = new Date();
  document.getElementById('clock-utc').textContent = formatTime(now, 'UTC');
  document.getElementById('clock-ny').textContent = formatTime(now, 'America/New_York');
  document.getElementById('clock-london').textContent = formatTime(now, 'Europe/London');
  document.getElementById('clock-tokyo').textContent = formatTime(now, 'Asia/Tokyo');
}

// Initial call and then every second
updateClocks();
setInterval(updateClocks, 1000);