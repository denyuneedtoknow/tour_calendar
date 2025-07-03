# Tour Calendar

A web application for managing and displaying tour schedules with dynamic backgrounds and multiple tour support.

## Features

- **Multiple Tours**: Support for different tour schedules (Europe 2024, France 2025)
- **Dynamic Backgrounds**: Background images change based on the selected tour
- **Interactive Calendar**: Click on dates to view tour details
- **Responsive Design**: Works on desktop and mobile devices
- **Tour History**: View all available tours in one place

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/denyuneedtoknow/tour_calendar.git
cd tour_calendar
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npx webpack serve --open
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To build the project for production:

```bash
npm run build
```

## Project Structure

```
tour_calendar/
├── src/
│   ├── js/
│   │   ├── calendar.js          # Main calendar logic
│   │   ├── details.js           # Tour details display
│   │   ├── tours.js             # Tours overview page
│   │   ├── background-manager.js # Dynamic background management
│   │   ├── schedule.js          # Europe 2024 tour schedule
│   │   └── france-schedule.js   # France 2025 tour schedule
│   ├── pages/
│   │   ├── calendar.html        # Main calendar page
│   │   ├── details.html         # Details page
│   │   └── tours.html           # Tours overview page
│   └── styles/
│       ├── main.scss            # Global styles
│       ├── calendar.scss        # Calendar styles
│       ├── details.scss         # Details page styles
│       └── tours.scss           # Tours page styles
├── public/
│   └── images/
│       ├── bg_europe_2024.avif  # Europe tour background
│       ├── bg_france_2025.avif  # France tour background
│       └── cross.png            # Cross icon for past dates
└── dist/                        # Built files (generated)
```

## Available Tours

### France Tour 2025 (June-July)

- **Duration**: June 28 - July 16, 2025
- **Locations**: Lutsk, Katowice, Paris, Celles-sur-Belle
- **Description**: National Symphony Orchestra of Ukraine tour in France

### Europe Tour 2024 (November-December)

- **Duration**: November 10 - December 8, 2024
- **Locations**: Multiple cities across Europe
- **Description**: European tour through Germany, Poland, Belgium, and more

## Technologies Used

- **Frontend**: Vanilla JavaScript, SCSS
- **Build Tool**: Webpack 5
- **Development Server**: Webpack Dev Server
- **Transpilation**: Babel

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
