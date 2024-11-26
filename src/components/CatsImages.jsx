import { useState, useEffect } from "react";

function CatImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=5",
        );
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cat images:", error);
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Cat Images</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt="Cat"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                margin: "10px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CatImages;
