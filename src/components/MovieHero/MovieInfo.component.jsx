import React,{useContext, useState} from "react";

//component
import PaymentModal from "../PaymentModal/Payment.component";

//context
import { MovieContext } from "../../context/Movie.context";

export default function MovieInfo() {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ price, setPrice] = useState(0);

  const {movie} = useContext(MovieContext);
  
  const genres = movie.genres?.map( ({name}) => name).join(", ")  // optional chaining

  const rentMovie=()=>{
    setIsOpen(true);
    setPrice(249);
  }
  const buyMovie=()=>{
    setIsOpen(true);
    setPrice(499);
  }

  return (
    <>
    <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} price={price}/>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 md:px-4">
          <div className="h-8 w-36">
            <img
              className="w-full h-full"
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt=""
            />
          </div>
          <span className="text-white text-xs bg-bms-700 p-1 rounded flex items-center">
            Streaming Now
          </span>
        </div>
        <h1 className="hidden lg:block text-white lg:text-5xl font-bold">{movie.original_title}</h1>
        <div className="flex flex-col-reverse gap-5 lg:flex-col">
          <div className="flex flex-col gap-3 md:px-4">
            <h4 className="text-gray-200 text-md">
              4K &bull; {movie.original_language} :
              <span className="text-red-700"> Audio(1), Subtitle(1) </span>
            </h4>
            <h4 className="text-gray-200 text-md">
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; US &bull;
              25 Mar,2022
            </h4>
          </div>
          <div className="flex gap-3 md:w-screen lg:w-full md:px-4">
            <button onClick={rentMovie}  className="text-white bg-red-600 w-full px-6 py-3 rounded-lg font-semibold">
              Rent ₹299
            </button>
            <button onClick={buyMovie} className="text-white bg-red-600 w-full px-6 py-3 rounded-lg font-semibold">
              Buy ₹499
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
