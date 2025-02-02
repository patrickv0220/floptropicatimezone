function updateTime() {
  // Current time in GMT-3 (São Paulo)
  const gmt3Offset = -3 * 60; // GMT-3 offset in minutes
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const gmt3Time = new Date(utcTime + gmt3Offset * 60000);

  // Convert GMT-3 time to local time
  const localTime = new Date(gmt3Time.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));

  // Format the time and update the page
  const formattedTime = localTime.toLocaleString();

  document.getElementById("time").innerText = `Local Time: ${formattedTime}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial time display
updateTime();