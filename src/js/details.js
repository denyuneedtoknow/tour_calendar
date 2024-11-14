import tourSchedule from "./schedule";
import "../styles/details.scss";

// Render details
const renderDetails = () => {
  const detailsContainer = document.getElementById("details");
  const selectedDateIndex = localStorage.getItem("selectedDateIndex");

  if (selectedDateIndex !== null) {
    const { date, city, hotel } = tourSchedule[selectedDateIndex];
    detailsContainer.innerHTML = `
      <h2>${date}</h2>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Hotel:</strong> ${hotel}</p>
      <button onclick="window.location.href='../pages/calendar.html'">Back to Calendar</button>
    `;
  } else {
    detailsContainer.innerHTML = `<p>No date selected.</p>`;
  }
};

document.addEventListener("DOMContentLoaded", renderDetails);
