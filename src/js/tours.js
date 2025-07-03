import { setTourBackground } from "./background-manager";
import "../styles/main.scss";
import "../styles/tours.scss";

// Set default background for tours page
setTourBackground("france");

// Tour data
const tours = [
  {
    id: "france-2025",
    name: "France Tour 2025",
    period: "June 28 - July 16, 2025",
    description:
      "National Symphony Orchestra of Ukraine tour in France with concerts in Paris and Celles-sur-Belle",
    isActive: true,
    url: "/",
  },
  {
    id: "europe-2024",
    name: "Europe Tour 2024",
    period: "November 10 - December 8, 2024",
    description: "European tour through Germany, Poland, Belgium, and more",
    isActive: false,
    url: "/europe-2024.html",
  },
];

// Render tours
const renderTours = () => {
  const toursContainer = document.getElementById("tours");

  toursContainer.innerHTML = tours
    .map(
      (tour) => `
    <div class="tour-card ${tour.isActive ? "active" : "past"}">
      <h2 class="tour-name">${tour.name}</h2>
      <p class="tour-period">${tour.period}</p>
      <p class="tour-description">${tour.description}</p>
      <div class="tour-status">
        ${
          tour.isActive
            ? '<span class="status-active">Active Tour</span>'
            : '<span class="status-past">Past Tour</span>'
        }
      </div>
      <a href="${tour.url}" class="tour-link" data-tour="${tour.id}">
        ${tour.isActive ? "View Current Tour" : "View Tour Details"}
      </a>
    </div>
  `
    )
    .join("");

  // Add click handlers for tour links
  const tourLinks = document.querySelectorAll(".tour-link");
  tourLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const tourId = link.getAttribute("data-tour");
      if (tourId === "europe-2024") {
        localStorage.setItem("currentTour", "europe");
      } else if (tourId === "france-2025") {
        localStorage.setItem("currentTour", "france");
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", renderTours);
