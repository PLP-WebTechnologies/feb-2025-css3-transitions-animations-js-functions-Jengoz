function triggerAnimation(id) {
    const image = document.getElementById(id);
    image.classList.remove('animate'); // Reset animation
    void image.offsetWidth;            // Force reflow
    image.classList.add('animate');
  
    // Store preference
    localStorage.setItem("favoriteSpot", id);
    console.log(`Saved favorite: ${id}`);
  }
  
  function savePreference() {
    const saved = localStorage.getItem("favoriteSpot");
    if (saved) {
      alert(`Your favorite place has been saved as: ${saved}`);
    } else {
      alert("Click a 'Love it' button to choose your favorite first!");
    }
  }
  
  function loadPreference() {
    const saved = localStorage.getItem("favoriteSpot");
    if (saved) {
      triggerAnimation(saved);
      alert(`Welcome back to your favorite place!`);
    } else {
      alert("No favorite saved yet.");
    }
  }
  