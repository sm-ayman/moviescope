import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faSmile,
  faMeh,
  faFrown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faStarSolid,
  faStarHalfAlt as faStarHalfSolid,
} from "@fortawesome/free-solid-svg-icons";

const MovieCard = () => {
  return (
    <div className="bg-gray-800 rounded-md shadow-lg text-gray-300 font-mono max-w-4xl p-5">
      <div className="md:flex px-4 leading-none">
        <div className="flex-none">
          <img
            src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
            alt="Joker Poster"
            className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
          />
        </div>

        <div className="flex-col px-4">
          <p className="pt-4 text-2xl font-bold">Joker (2020)</p>
          <hr className="hr-text" data-content="" />

          <div className="text-md my-2">
            <span className="font-bold">2h 2min | Crime, Drama, Thriller</span>
          </div>

          <p className="hidden md:block my-4 text-sm text-left">
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society. He then embarks on a downward
            spiral of revolution and bloody crime. This path brings him
            face-to-face with his alter-ego: the Joker.
          </p>

          <p className="flex text-md my-2">
            Rating: 9.0/10 <span className="font-bold px-2">|</span> Mood: Dark
          </p>

          <div className="text-xs">
            {["TRAILER", "IMDB", "AMAZON"].map((label) => (
              <button
                key={label}
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 hover:bg-gray-900"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 mb-4 w-full">
        <div className="flex space-x-4 text-red-600">
          <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
          <FontAwesomeIcon icon={faEye} className="w-5 h-5 text-blue-600" />
        </div>

        <div className="flex space-x-4 text-yellow-500">
          <FontAwesomeIcon icon={faSmile} className="w-5 h-5" />
          <FontAwesomeIcon icon={faMeh} className="w-5 h-5" />
          <FontAwesomeIcon icon={faFrown} className="w-5 h-5" />
          <FontAwesomeIcon icon={faStarSolid} className="w-5 h-5" />
          <FontAwesomeIcon icon={faStarHalfSolid} className="w-5 h-5" />
          <FontAwesomeIcon icon={faStarSolid} className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
