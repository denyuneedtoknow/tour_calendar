// Background manager utility
export const setTourBackground = (tourType) => {
  const body = document.body;

  // Remove existing tour classes
  body.classList.remove("tour-europe", "tour-france");

  // Set background image based on tour type
  switch (tourType) {
    case "europe":
      body.style.backgroundImage = 'url("/images/bg_europe_2024.avif")';
      body.classList.add("tour-europe");
      break;
    case "france":
      body.style.backgroundImage = 'url("/images/bg_france_2025.avif")';
      body.classList.add("tour-france");
      break;
    default:
      // Default to France tour background
      body.style.backgroundImage = 'url("/images/bg_france_2025.avif")';
      body.classList.add("tour-france");
  }
};

// Set background based on current page or localStorage
export const initializeBackground = () => {
  const currentTour = localStorage.getItem("currentTour") || "france";
  setTourBackground(currentTour);
};
