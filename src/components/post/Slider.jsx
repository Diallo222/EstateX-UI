import { useState } from "react";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between h-[300px] md:h-[450px]">
    <div className="w-full md:w-3/4 h-full md:pr-6">
      <img
        className="rounded-lg w-full h-full object-cover"
        src={images[imageIndex]}
        alt=""
        onClick={() => setImageIndex(0)}
      />
    </div>
    <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 md:gap-4 mt-4 md:mt-0">
      {images.slice(1).map((image, index) => (
        <img
          src={image}
          alt=""
          className="rounded-lg cursor-pointer w-1/3 md:w-full h-[100px] md:h-1/3 object-cover"
          key={index}
          onClick={() => setImageIndex(index + 1)}
        />
      ))}
    </div>
  </div>
  );
};

export default Slider;
