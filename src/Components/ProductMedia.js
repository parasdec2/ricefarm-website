import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ProductMedia({ images }) {
  return (
    <Carousel className="productMedia" width="250px">
      <div>
        <img src={images} alt="product" />
      </div>
      <div>
        <img src={images} alt="product" />
      </div>
      <div>
        <img src={images} alt="product" />
      </div>
    </Carousel>
  );
}

export default ProductMedia;
