function updateTimes() {
  // Get the current time as a Date object (in your local time zone)
  const now = new Date();

  // Format local time (this uses your system's time zone)
  const localTime = now.toLocaleString();

  // Format the time for GMT‑3 (São Paulo) using the IANA time zone identifier
  const gmt3Time = now.toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo",
    hour12: true, // 24-hour format; remove if you prefer 12-hour format
  });

  document.getElementById("local").innerText = "Local Time: " + localTime;
  document.getElementById("gmt3").innerText = "Floptropica (AES, GMT -3) Time: " + gmt3Time;
}

// Update every second
setInterval(updateTimes, 1000);
updateTimes();