import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showModal, setShowModal] = useState(false); // состояние для модального окна
  const [trailerUrl, setTrailerUrl] = useState(""); // URL трейлера

  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiJ9...";
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=684437303f2bb72e7ce112e0702558f8`;
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(url, config).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTrailerUrl("");
  };

  return (
    <div
      className={expandedCard !== null ? "blur-background" : ""}
      style={{ backgroundColor: "rgba(24, 24, 27, 0.966)", color: "white" }}
    >
      <section className="panellSection d-flex">
        <div className="panellContent">
          <h2>
            {Array.from("CINEVERSE").map((letter, index) => (
              <span key={index} className="letter" style={{ "--i": index }}>
                {letter}
              </span>
            ))}
          </h2>
        </div>
      </section>

      <section className="moviesSection">
        <div className="container">
          <h3>Upcoming Movies</h3>
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5>{movie.title}</h5>
                    <div className="d-flex justify-content-between">
                      <span className="release_date">{movie.release_date}</span>
                      <span className="original_language">
                        {movie.original_language}
                      </span>
                    </div>

                    <Link to={`/movie/${movie.id}`}>
                      <button>Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="315"
              src={trailerUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
