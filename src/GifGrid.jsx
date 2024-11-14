import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs";
import { GifItem } from "./components/GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const newImages = await getGifs(category);
      setImages(newImages);
    }
    getImages();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}

        {/*    {images.map(({ id, title, url }) => (
          <>
            <div className="card">
              <img key={id} src={url} alt={title} />
              <p>{title}</p>
            </div>
          </>
        ))} */}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
