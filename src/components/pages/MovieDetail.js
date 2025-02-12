import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/MovieDetail.css";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiJ9...";
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=684437303f2bb72e7ce112e0702558f8&language=en-US`;
    axios.get(url).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const openModal = () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=684437303f2bb72e7ce112e0702558f8&language=en-US`;
    axios.get(url).then((response) => {
      const trailer = response.data.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        setShowModal(true);
      } else {
        alert("Trailer not available");
      }
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setTrailerUrl("");
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <div>
        <br />
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-content">
        <h1>{movie.title}</h1>
        <span className="release-date">Release Date: {movie.release_date}</span>
        <p>{movie.overview || "No description available"}</p>
        <div>
          <span className="original_language">{movie.original_language}</span>
          <span className="vote_average">{movie.vote_average}</span>
          <span className="vote_count">{movie.vote_count}</span>
          <br />
          <br />
          <span>
            <b>Popularity :</b> {movie.popularity}
          </span>
        </div>
        <div>
          <button className="watch-btn" onClick={openModal}>
            Watch Trailer
          </button>
          <button className="watch-btn continue-btn">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Go Back
            </Link>
          </button>
        </div>
      </div>

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
