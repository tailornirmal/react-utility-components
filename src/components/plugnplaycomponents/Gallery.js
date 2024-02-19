import { useEffect, useState } from "react";

function Gallery() {
  const URL = "https://api.unsplash.com/search/photos";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${URL}?query=london?page=1`, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Client-ID b_J4AxTGZxUEaV2zLddd_ctqQyQcnuNgpHrZT0xvUzY",
          },
        });
        const data = await res.json();
        setPhotos(data.results);
      } catch (error) {
        setErrorMessage("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserList();
  }, [URL]);

  console.log("photos", photos);

  const renderImages = photos.map((picture) => {
    return (
      <div>
        <img alt={picture.alt_description} src={picture.urls.full} />
      </div>
    );
  });

  return (
    <div className="flex flex-row gap-2 pl-4 pr-4 mt-48">{renderImages}</div>
  );
}

export default Gallery;
