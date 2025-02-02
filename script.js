function updateTime() {
  // GMT-3 time (São Paulo)
  const gmt3Offset = -3 * 60; // GMT-3 offset in minutes
  const now = new Date();
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const gmt3Time = new Date(utcTime + gmt3Offset * 60000);

  // Format GMT-3 time
  const gmt3FormattedTime = gmt3Time.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });

  // Convert GMT-3 time to local time
  const localTime = new Date(gmt3Time.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const localFormattedTime = localTime.toLocaleString();

  // Update the page with GMT-3 and local times
  document.getElementById("gmt3-time").innerText = `GMT-3 Time: ${gmt3FormattedTime}`;
  document.getElementById("local-time").innerText = `Local Time: ${localFormattedTime}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial time display
updateTime();