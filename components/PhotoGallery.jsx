import { useState } from "react";
import images from "../src/images.json";

export default function PhotoGallery() {
  const [name, setName] = useState(images[0].name);
  const [id, setId] = useState(images[0].id);

  const next = () => {
    if (id == images.length) {
      setId(0);
    }
    setId((prev) => prev + 1);
  };

  const previous = () => {
    if (id == 1) {
      setId(images.length + 1);
    }
    setId((prev) => prev - 1);
  };

  return (
    <>
      <div>
        <h2>Photo Gallery</h2>
        <div className="photo-gallery-container flex">
          <div className="arrow">
            <button onClick={previous}>&lt;</button>
          </div>
          <div className="flex">
            {images &&
              images
                .filter((image) => image.id === id)
                .map((image) => (
                  <div key={image.id}>
                    <div className="image-container">
                      <img
                        src={`/src/assets/image-${image.id}.jpg`}
                        alt={image.name}
                      />
                    </div>
                    {image.name && <div className="name">{image.name}</div>}
                  </div>
                ))}
          </div>
          <div className="arrow">
            <button onClick={next}>&gt;</button>
          </div>
        </div>
        <pre style={{ textAlign: "left" }}>
          {`import { useState } from "react";
import images from "../src/images.json";

export default function PhotoGallery() {
  const [name, setName] = useState(images[0].name);
  const [id, setId] = useState(images[0].id);

  const next = () => {
    if (id == images.length) {
      setId(0);
    }
    setId((prev) => prev + 1);
  };

  const previous = () => {
    if (id == 1) {
      setId(images.length + 1);
    }
    setId((prev) => prev - 1);
  };

  return (
    <>
      <div>
        <h2>Photo Gallery</h2>
        <div className="photo-gallery-container flex">
          <div className="arrow">
            <button onClick={previous}>&lt;</button>
          </div>
          <div className="flex">
            {images &&
              images
                .filter((image) => image.id === id)
                .map((image) => (
                  <div key={image.id}>
                    <div className="image-container">
                      <img
                        src={"/src/assets/image-image.id.jpg"}
                        alt={image.name}
                      />
                    </div>
                    {image.name && <div className="name">{image.name}</div>}
                  </div>
                ))}
          </div>
          <div className="arrow">
            <button onClick={next}>&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}
`}
        </pre>
      </div>
    </>
  );
}
