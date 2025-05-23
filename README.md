<img width="941" alt="image" src="https://github.com/user-attachments/assets/9d5a2150-0bf5-4a95-9d65-1adb3aab45ae" /># MoviesCope

[Live Demo](https://movies-cope.netlify.app/)

---

## Overview

MoviesCope is a sleek and responsive React.js web application that allows users to browse popular movies, search for movies by title, and manage their favorite list. The app fetches movie data dynamically and offers a smooth, user-friendly experience.

---

## Features

- Browse popular movies with detailed information including title, release year, and ratings.
- Search for movies by title with real-time query input.
- Add or remove movies from your favorites list.
- Persistent favorites saved using local storage.
- Responsive design using Tailwind CSS.
- Navigation between Home and Favourites pages with React Router.

---

## API Used

This project uses **The Movie Database (TMDb) API** to fetch movie data, including popular movies and their details.

- API Documentation: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

---

## What I Explored and Learned with React.js

- **React Hooks**: Used `useState` and `useEffect` extensively for state management and side effects such as data fetching.
- **Context API**: Implemented a custom `FavMovieContext` to manage global state for favorite movies across the application.
- **React Router**: Set up client-side routing to navigate between the Home and Favourites pages.
- **Component-based Architecture**: Created reusable and clean components like `Navbar`, `MovieCard`, and `Footer`.
- **Event Handling**: Managed user interactions such as adding/removing favorites and searching movies.
- **Conditional Rendering**: Displayed UI elements conditionally based on state (e.g., favorite icon color).
- **Integration with Tailwind CSS**: Styled components responsively and beautifully using utility-first CSS classes.

---

## Screenshots

### Home Page  
![Home Page]<img width="631" alt="image" src="https://github.com/user-attachments/assets/c0993937-550e-424e-b2bf-4016dd95f0ac" />

### Search Feature  
![Search Feature]<img width="622" alt="image" src="https://github.com/user-attachments/assets/6aa42e7c-397c-4900-84bc-e63c7e53b377" />


### Favourites Page  
![Favourites Page]<img width="941" alt="image" src="https://github.com/user-attachments/assets/fff1ae49-2406-405a-92db-239e05113dba" />


*Note: Replace the image paths above (`./screenshots/home.png`, etc.) with the actual paths or URLs of your screenshots.*

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/moviescope.git
cd moviescope/frontend
npm install
npm run dev
```

## Developed by Sultan Md. Ayman
[GitHub](https://github.com/sm-ayman) | [LinkedIn](https://www.linkedin.com/in/sultan-md-ayman) | [Portfolio](https://sm-ayman.netlify.app/)

