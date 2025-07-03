import franceTourSchedule from "./france-schedule";
import { setTourBackground } from "./background-manager";
import "../styles/main.scss";
import "../styles/details.scss";

// Set France tour background
setTourBackground("france");

// Render details
const renderDetails = () => {
  const detailsContainer = document.getElementById("details");
  const selectedDateIndex = localStorage.getItem("selectedDateIndex");

  if (selectedDateIndex !== null) {
    const { date, city, hotel } = franceTourSchedule[selectedDateIndex];
    // Add year 2025 to the date if it's not present
    const dateWithYear = date.includes("2025") ? date : `${date}, 2025`;
    detailsContainer.innerHTML = `
    <div class='detailsWrapper'>
      <h2 class='date'>${dateWithYear}</h2>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Hotel:</strong> ${hotel}</p>
      <button onclick="window.location.href='/'">Back to Calendar</button>
    </div>
`;
  } else {
    detailsContainer.innerHTML = `<p>No date selected.</p>`;
  }
};

document.addEventListener("DOMContentLoaded", renderDetails);
