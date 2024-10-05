import { useFetch } from "../hooks/useFetch";
import { FilmCard } from "../components/FilmCard";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const FilmList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  // Page Title
  useTitle(`${title}`);

  return (
    <main>
      <section className="maxx-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <FilmCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
