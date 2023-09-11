# PromptWiz README

PromptWiz is a full-stack open-source AI prompt tool for the modern world. This project allows users to discover, create, and share creative prompts powered by AI. It includes both frontend and backend components.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Getting Started

To run PromptWiz locally, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Create a MongoDB database and obtain the connection URI.
4. Create a `.env.local` file in the project root directory and add the following environment variables:

Replace `GOOGLE_ID`,
`GOOGLE_CLIENT_SECRET`,
`MONGODB_URI`,
`NEXTAUTH_URL`,
`NEXTAUTH_URL_INTERNAL`,
`NEXTAUTH_SECRET` with your actual values.

5. Run the following commands in the terminal:

6. The application should now be running locally at [http://localhost:3000](http://localhost:3000).

## Project Structure

The codebase is organized as follows:

- `pages`: Contains Next.js pages for routing.
- `components`: Reusable React components used throughout the application.
- `models`: MongoDB schemas and models for User and Prompt data.
- `api`: API routes for handling CRUD operations on prompts and user authentication.
- `utils`: Utility functions and database connection setup.
- `styles`: CSS styles for the application.

## Usage

### Home Page

The home page (`app/page.jsx`) displays a welcome message and a feed of prompts created by users. Users can discover and share prompts on this page.

### Create Prompt Page

The create prompt page (`app/create-prompt/page.jsx`) allows authenticated users to create new prompts. Users can enter a prompt and assign it a tag.

### My Profile Page

The my profile page (`app/profile/page.jsx`) displays prompts created by the currently logged-in user. Users can edit and delete their own prompts on this page.

### User Profile Page

The user profile page (`app/profile/[id]/page.jsx`) displays prompts created by a specific user. Users can explore the prompts created by other users.

### Update Prompt Page

The update prompt page (`app/update-prompt/page.jsx`) allows users to edit and update their existing prompts.

### Feed Component

The `Feed` component (`components/Feed.jsx`) displays a feed of prompts and provides search functionality to filter prompts by tags and usernames.

### Nav Component

The `Nav` component (`components/Nav.jsx`) provides navigation links and user authentication options in the application header.

### Form Component

The `Form` component (`components/Form.jsx`) is a reusable form component for creating and updating prompts.

### Profile Component

The `Profile` component (`components/Profile.jsx`) displays user profiles and their associated prompts.

### PromptCard Component

The `PromptCard` component (`components/PromptCard.jsx`) displays individual prompts with options to copy, edit, and delete prompts.
