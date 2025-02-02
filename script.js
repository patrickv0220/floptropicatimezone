// Function to get and display the current time in GMT-3 (São Paulo)
function getGMT3Time() {
  const now = new Date();
  const saoPauloOffset = -3 * 60; // GMT-3 offset in minutes
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const saoPauloTime = new Date(utcTime + saoPauloOffset * 60000);
  
  // Format the time and display it
  const formattedTime = saoPauloTime.toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "full",
    timeStyle: "long"
  });

  document.getElementById("gmt3-time").innerText = `Current Time in GMT-3 (São Paulo): ${formattedTime}`;
}

// Function to convert GMT-3 time to selected time zone
function convertTime() {
  const timezone = document.getElementById("timezone-select").value;
  const now = new Date();

  const convertedTime = now.toLocaleString("en-US", {
    timeZone: timezone,
    dateStyle: "full",
    timeStyle: "long"
  });

  document.getElementById("converted-time").innerText = `Converted Time in ${timezone}: ${convertedTime}`;
}

// Run the function to display GMT-3 time on page load
getGMT3Time();