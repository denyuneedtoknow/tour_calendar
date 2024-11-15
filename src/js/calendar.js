import tourSchedule from "./schedule";
import "../styles/main.scss";
import "../styles/calendar.scss";

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
      <div "calendar-day"><strong>${dayOfWeek}</strong></div>
      <div "calendar-date-text">${date}</div>
    `;
    // dateElement.textContent = date;
    dateElement.onclick = () => {
      // Save selected index to localStorage and navigate to details page
      localStorage.setItem("selectedDateIndex", index);
     window.location.href = "./details.html";
    };
    calendar.appendChild(dateElement);
  });
};

document.addEventListener("DOMContentLoaded", renderCalendar);
