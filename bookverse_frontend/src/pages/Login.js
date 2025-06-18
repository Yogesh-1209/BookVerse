import React, { useState } from "react";
import "../styles/Login.css"; // Ensure you create and import this CSS file

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [
    "Fiction", "Science", "Biography", "Fantasy",
    "Romance", "Mystery", "Self-Help"
  ];

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(${isSignUp ? "Sign Up" : "Sign In"} form submitted!);
    console.log("Selected Genres:", selectedGenres);
  };

  return (
    <div className="auth-card">
      <img src="logo.jpg.jpeg" alt="BookVerse Logo" className="logo" />

      <h2>
        <span className="book">Book</span><span className="verse">Verse</span>
      </h2>

      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <div>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" required />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
          </>
        )}

        <div className="full-width">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="full-width">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        {isSignUp && (
          <div className="full-width">
            <label>Preferred Genres</label>
            <div className="dropdown">
              <div
                className="dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedGenres.length > 0
                  ? selectedGenres.join(", ")
                  : "Select Genres"}
              </div>
              {dropdownOpen && (
                <div className="dropdown-content dropdown-grid">
                  {genres.map((genre) => (
                    <label key={genre}>
                      <input
                        type="checkbox"
                        checked={selectedGenres.includes(genre)}
                        onChange={() => toggleGenre(genre)}
                      />
                      {genre}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <button type="submit" className="full-width">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <div className="toggle-text full-width">
          <span>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </span>
          <a onClick={toggleMode}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;