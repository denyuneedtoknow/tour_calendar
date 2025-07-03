import franceTourSchedule from "./france-schedule";
import { setTourBackground } from "./background-manager";
import "../styles/main.scss";
import "../styles/calendar.scss";

// Set France tour background
setTourBackground("france");

// Render calendar
const renderCalendar = () => {
  const calendar = document.getElementById("calendar");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  franceTourSchedule.forEach(({ date }, index) => {
    // Add year 2025 to the date if it's not present
    const dateWithYear = date.includes("2025") ? date : `${date}, 2025`;
    const dateObj = new Date(dateWithYear);
    const options = { weekday: "long" }; // Full weekday name
    const dayOfWeek = dateObj.toLocaleDateString("en-US", options);
    const isPast = dateObj < today;

    const dateElement = document.createElement("div");
    dateElement.className = `calendar-date ${isPast ? "past-date" : ""}`;
    dateElement.innerHTML = `
      <div class="calendar-day"><strong>${dayOfWeek}</strong></div>
      <div class="calendar-date-text">${date}</div>
    `;

    dateElement.onclick = () => {
      // Save selected index to localStorage and navigate to details page
      localStorage.setItem("selectedDateIndex", index);
      localStorage.setItem("currentTour", "france");
      window.location.href = "./france-details.html";
    };
    calendar.appendChild(dateElement);
  });
};

document.addEventListener("DOMContentLoaded", renderCalendar);
