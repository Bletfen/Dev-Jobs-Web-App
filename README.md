Dev Jobs Web App

A responsive job board application designed to help developers find job opportunities effortlessly.

Features

Job Listings: Browse a curated list of developer job openings.

Filters: Refine job searches by title, location, and contract type.

Pagination: View jobs in manageable chunks with "Show More" functionality.

Job Details: Click on a job to view detailed information and application instructions.

Responsive Design: Optimized for desktop, tablet, and mobile devices.

Dark Mode: Theme can be toggled manually or remembered via localStorage for a persistent user preference.

Technologies Used

Frontend: React, TypeScript, Vite

Styling: Tailwind CSS

State Management: React Context API

Routing: React Router

Data Source: Local JSON file

Version Control: Git

Installation

Clone the repository:

git clone https://github.com/Bletfen/Dev-Jobs-Web-App.git

Navigate into the project directory:

cd Dev-Jobs-Web-App

Install dependencies:

npm install

Start the development server:

    npm run dev

    Open your browser and go to http://localhost:3000 to view the application.

Deployment

The application is deployed and can be accessed at:

https://dev-jobs-web-app-lilac.vercel.app

Development Notes

    State Management: Utilized React Context API for global state management, ensuring a seamless experience across components.

    Routing: Implemented React Router for navigation between job listings and detailed job pages.

    Styling: Employed Tailwind CSS for utility-first styling, enabling rapid UI development.

    Data Handling: Fetched job data from a local JSON file, simulating an API response for development purposes.

    Theme Persistence: Integrated localStorage to remember user theme preferences (light/dark) across sessions.
