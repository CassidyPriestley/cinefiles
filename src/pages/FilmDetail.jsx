import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";
import { useTitle } from "../hooks/useTitle";

export const FilmDetail = () => {
  const params = useParams();
  // The string includes :
  // use substring on params.id to remove the colon for the proper id
  const [film, setFilm] = useState({});
  const image = film.poster_path
    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id.substring(
          1
        )}?api_key=edcfab4a85458d91db4ea5b0083caa20`
      );
      const json = await response.json();
      setFilm(json);
      console.log(json);
    }
    fetchMovie();
  }, []);

  // Page Title
  useTitle(`${film.title}`);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={film.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {film.title}
          </h1>
          <p className="my-4">{film.overview}</p>
          {/* if genre is empty return nothing to avoid errors */}
          {film.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {film.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 font-bold text-gray-900 dark:text-white">
              {film.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {film.vote_count} Reviews
            </span>
          </div>

          <p className="my-4 ">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{film.runtime} mins.</span>
          </p>
          <p className="my-4 ">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{film.release_date}</span>
          </p>
          <p className="my-4 ">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{film.budget}</span>
          </p>
          <p className="my-4 ">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{film.revenue}</span>
          </p>
          <p className="my-7 ">
            <a
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-20 py-2.5 text-center me-2 mb-2"
              href={`https://www.imdb.com/title/${film.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              IMDB
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
