function updateTime() {
  const gmt3Element = document.getElementById('gmt3');
  const localElement = document.getElementById('local');

  const gmt3Time = new Date().toLocaleString('en-US', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const localTime = new Date().toLocaleTimeString();

  gmt3Element.textContent = `Floptropica (AES, GMT-3): ${gmt3Time}`;
  localElement.textContent = `Local Time: ${localTime}`;
}

setInterval(updateTime, 1000);

// Popup functions
function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popupOverlay").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popupOverlay").style.display = "none";
}