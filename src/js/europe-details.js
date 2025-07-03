import tourSchedule from "./schedule";
import { setTourBackground } from "./background-manager";
import "../styles/main.scss";
import "../styles/details.scss";

// Set Europe tour background
setTourBackground("europe");

// Render details
const renderDetails = () => {
  const detailsContainer = document.getElementById("details");
  const selectedDateIndex = localStorage.getItem("selectedDateIndex");

  if (selectedDateIndex !== null) {
    const { date, city, hotel } = tourSchedule[selectedDateIndex];
    detailsContainer.innerHTML = `
    <div class='detailsWrapper'>
      <h2 class='date'>${date}</h2>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Hotel:</strong> ${hotel}</p>
      <button onclick="window.location.href='./europe-2024.html'">Back to Calendar</button>
    </div>
`;
  } else {
    detailsContainer.innerHTML = `<p>No date selected.</p>`;
  }
};

document.addEventListener("DOMContentLoaded", renderDetails);
