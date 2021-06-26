import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

function ProductMedia({ images }) {
  return (
    <Carousel className="productMedia" width="250px">
      <div>
        <img src={images} />
      </div>
      <div>
        <img src={images} />
      </div>
      <div>
        <img src={images} />
      </div>
    </Carousel>
  );
}

export default ProductMedia;
