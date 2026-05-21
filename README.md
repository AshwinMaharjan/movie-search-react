# 🎬 Movie App

A cinematic movie discovery app built with React, powered by the TMDB API. Browse popular movies, search by title, and save your favorites — all persisted across sessions via localStorage.

---

## ✨ Features

- **Popular Movies** — loads the current trending movies on launch
- **Search** — find any movie by title using the TMDB search API
- **Favorites** — add or remove movies from your favorites list with one click
- **Persistent Storage** — favorites survive page refreshes via localStorage
- **Responsive Design** — works cleanly on mobile, tablet, and desktop

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| API | [TMDB (The Movie Database)](https://www.themoviedb.org/) |
| Styling | Plain CSS (modular per component) |
| State | React Context API |
| Storage | localStorage |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
├── contexts/
│   └── MovieContext.jsx
├── services/
│   └── api.js
├── css/
│   ├── index.css
│   ├── App.css
│   ├── Navbar.css
│   ├── Home.css
│   ├── MovieCard.css
│   ├── Favorites.css
│   └── Footer.css
└── App.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or above)
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/movie-app.git
cd movie-app

# 2. Install dependencies
npm install

# 3. Create a .env file in the root
touch .env
```

Add your TMDB API key to `.env`:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

```bash
# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_TMDB_API_KEY` | Your TMDB API key (required) |

> ⚠️ Never commit your `.env` file. It is already included in `.gitignore` by default with Vite.

---

## 📸 Pages

### Home
Browse popular movies on load or search for any title. Movies are displayed in a responsive grid with poster art, title, and release year.

### Favorites
All movies you've hearted are saved here. Favorites persist across browser sessions using localStorage. Removing a movie from favorites updates instantly.

---

## 🙏 Acknowledgements

- Movie data and images provided by [TMDB](https://www.themoviedb.org/)
- This product uses the TMDB API but is not endorsed or certified by TMDB