// Select planets and their orbits
const orbits = document.querySelectorAll('.orbit');

// Function to adjust animation speed dynamically
function setAnimationSpeed(speedMultiplier) {
  orbits.forEach((orbit, index) => {
    const baseDuration = 10 * (index + 1); // Base duration increases per planet
    orbit.style.animationDuration = `${baseDuration / speedMultiplier}s`;
  });
}

// Function to adjust planet sizes dynamically
function setPlanetSizes(sizeMultiplier) {
  document.querySelectorAll('.planet').forEach(planet => {
    const baseSize = 20; // Base planet size
    const newSize = baseSize * sizeMultiplier;
    planet.style.width = `${newSize}px`;
    planet.style.height = `${newSize}px`;
    planet.style.boxShadow = `0 0 ${newSize / 2}px ${newSize / 6}px #4a90e2`;
  });
}

// Add interactivity: speed and size adjustment via keyboard
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case '+': // Increase speed
      setAnimationSpeed(2);
      break;
    case '-': // Decrease speed
      setAnimationSpeed(0.5);
      break;
    case 's': // Shrink planets
      setPlanetSizes(0.5);
      break;
    case 'l': // Enlarge planets
      setPlanetSizes(2);
      break;
    default:
      break;
  }
});

// Initial settings
setAnimationSpeed(1);
setPlanetSizes(1);
