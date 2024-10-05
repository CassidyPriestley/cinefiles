import { Routes, Route } from "react-router-dom";
import { FilmList, FilmDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<FilmList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="film/:id" element={<FilmDetail />} />
        <Route
          path="films/popular"
          element={<FilmList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="films/top"
          element={<FilmList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="films/upcoming"
          element={<FilmList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
