import tourSchedule from './schedule'

const renderCalendar = () => {
  const calendarContainer = document.getElementById("calendar");
  tourSchedule.forEach(({ date, city, hotel }) => {
    const calendarItem = document.createElement("div");
    calendarItem.className = "calendar-item";
    calendarItem.innerHTML = `
      <h2>${date}</h2>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Hotel:</strong> ${hotel}</p>
    `;
    calendarContainer.appendChild(calendarItem);
  });
};

document.addEventListener("DOMContentLoaded", renderCalendar);
