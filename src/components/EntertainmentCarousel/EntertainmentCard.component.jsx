import React from "react";
import Slider from "react-slick";

//config
import PosterCarouselSettings from "../../config/PosterCarouselSettings.config";
import EntertainmentImages from "../../config/EntertainmentImages.config";

function EntertainmentCard(props) {
  return (
    <>
      <div className="w-full h-30 px-2">
        <img
          className="w-full h-full rounded-xl hover:cursor-pointer"
          src={props.src}
          alt="Entertainment image"
        />
      </div>
    </>
  );
}

export default function EntertainmentCardSlider() {
  return (
    <>
      <Slider {...PosterCarouselSettings}>
        {EntertainmentImages.map((image) => {
          return <EntertainmentCard src={image} />;
        })}
      </Slider>
    </>
  );
}
