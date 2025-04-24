# V Prayukti - College Department Event Website

## Overview

V Prayukti is a college department event management website designed to streamline event registrations, provide event details, and manage participants efficiently. This platform allows students to explore upcoming events, register, and stay updated with event-related announcements.

## Features

- **Event Listings:** Browse and explore department-organized events.
- **User Registration:** Secure event registration system.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.
- **Secure API Integration:** Uses third-party APIs for event data and registrations.

## Tech Stack

### Frontend

- React.js
- React Query for data fetching and caching
- React Hook Form for form handling
- Tailwind CSS for styling
- React Router for navigation
- Native Fetch API for API calls

## Folder Structure

```
V-Prayukti/
│── Hooks/             # Custom React hooks
│── assets/            # Static assets (images, icons, etc.)
│── components/        # Reusable UI components
│── constants/         # Global constants and configurations
│── pages/            # Main application pages (Home, Events, Login, Register, etc.)
│── services/          # API service calls
│── utils/             # Utility functions
│── App.js             # Main App component
│── index.css          # Global styles
│── main.jsx           # Entry point
```

## Installation & Setup

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/Krishnagokul1305/V-Prayukti.git
   cd V-Prayukti
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run the Frontend:**

   ```sh
   npm run dev
   ```

## API Endpoints

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| GET    | /api/events        | Get all events                  |
| GET    | /api/events/\:id   | Get a single event by ID        |
| GET    | /api/workshop      | Get all workshops               |
| GET    | /api/combos        | Get all combo events            |
| POST   | /api/register      | Register for an event           |
| GET    | /api/register/\:id | Get a single registration by ID |

## Contribution Guidelines

- Fork the repository and create a new branch.
- Commit your changes with meaningful messages.
- Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any issues or suggestions, contact **Gokulakrishnan K** at **[krishnagokul1729@gmail.com](mailto\:krishnagokul1729@gmail.com)**.

