import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODQ0MzczMDNmMmJiNzJlN2NlMTEyZTA3MDI1NThmOCIsInN1YiI6IjY1ZmRhZmNhOTBmY2EzMDE3ZGEwNjM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWWMI8o2TaRreOcu3QJkmUvaxQOmeYlklOFyPc0O7Ng";

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=684437303f2bb72e7ce112e0702558f8`;
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(url, config).then((response) => {
      console.log(response, "response");

      const { data } = response;

      setMovies(data.results);
    });

    console.log(movies, "movies");
  }, []);

  return (
    <div style={{ backgroundColor: "rgba(21, 20, 27, 0.966)", color: "white" }}>
      <section className="moviesSection"> <br /> <br />
        <h2 className="carousel-heading">Popular Movies</h2>
        <div>
          <div className="container">
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
                        <span className="release_date">
                          {movie.release_date}
                        </span>
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
        </div>
      </section>
    </div>
  );
};
