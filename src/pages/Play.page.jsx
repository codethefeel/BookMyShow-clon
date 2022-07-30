import React from "react";

//components
import Posters from "../components/Posters/posters.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.components";

export default function PlayPage() {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="w-full lg:flex lg:gap-6 lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-black text-2xl font-semibold mb-4">Plays in Ahemdabad</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posters
                  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/spiderman-3-et00000031-25-01-2021-02-07-41.jpg"
                  title="Spider-Man 3"
                  subTitle="English 499$"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posters
                  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/spiderman-3-et00000031-25-01-2021-02-07-41.jpg"
                  title="Spider-Man 3"
                  subTitle="English 499$"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posters
                  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/spiderman-3-et00000031-25-01-2021-02-07-41.jpg"
                  title="Spider-Man 3"
                  subTitle="English 499$"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posters
                  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/spiderman-3-et00000031-25-01-2021-02-07-41.jpg"
                  title="Spider-Man 3"
                  subTitle="English 499$"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posters
                  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/spiderman-3-et00000031-25-01-2021-02-07-41.jpg"
                  title="Spider-Man 3"
                  subTitle="English 499$"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posters
                  src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/spiderman-3-et00000031-25-01-2021-02-07-41.jpg"
                  title="Spider-Man 3"
                  subTitle="English 499$"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/12">
          <h2 className="text-black text-2xl font-semibold mb-4">Filters</h2>
          <div>
            <PlaysFilters title="date" tags={["Today","Tomorow","This week end"]}/>
          </div>
          <div>
            <PlaysFilters title="Language" tags={["Gujrati","Hindi","English"]}/>
          </div>
          <div>
            <PlaysFilters title="Place" tags={["India","Usa","Japan"]}/>
          </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
