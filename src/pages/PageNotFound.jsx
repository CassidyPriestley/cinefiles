import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  // Page Title
  useTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImg}
              alt="404 Page Not Found Image"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-20 py-2.5 text-center me-2 mb-2">
              Back to CineFiles
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
