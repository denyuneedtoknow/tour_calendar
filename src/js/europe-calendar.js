import tourSchedule from "./schedule";
import { setTourBackground } from "./background-manager";
import "../styles/main.scss";
import "../styles/calendar.scss";

// Set Europe tour background
setTourBackground("europe");

// Render calendar
const renderCalendar = () => {
  const calendar = document.getElementById("calendar");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  tourSchedule.forEach(({ date }, index) => {
    const dateObj = new Date(date);
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
      localStorage.setItem("currentTour", "europe");
      window.location.href = "./europe-details.html";
    };
    calendar.appendChild(dateElement);
  });
};

document.addEventListener("DOMContentLoaded", renderCalendar);
