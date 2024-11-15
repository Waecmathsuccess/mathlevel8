// Select clock element
const clock = document.getElementById("clock");

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the clock
setInterval(updateClock, 1000);
updateClock(); // Update immediately on page load
