import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Gallery() {
  const URL = "https://api.unsplash.com/search/photos";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${URL}?query=young?page=1`, {
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

  const renderImages = photos.map((picture) => {
    return (
      <div className="w-60 h-60 rounded-md">
        <img alt={picture.alt_description} src={picture.urls.regular} />
      </div>
    );
  });

  if (loading) {
    return (
      <div>
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return <div className="row">{renderImages}</div>;
}

export default Gallery;
