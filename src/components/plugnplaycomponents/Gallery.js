import { useEffect, useState } from "react";
import Spinner from "../utility/Spinner";

function Gallery() {
  const URL = "https://api.unsplash.com/search/photos";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${URL}?query=train?page=1`, {
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
        setPhotos(data?.results);
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
      <div className="grid gap-1 place-items-center">
        <img
          className="w-64 h-64 pl-4 mb-5 shadow"
          alt={picture.alt_description}
          src={picture.urls.regular}
        />
        <span>{picture.alt_description}</span>
      </div>
    );
  });

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      {errorMessage ? <span>Error in loading data. </span> : renderImages}
    </div>
  );
}

export default Gallery;
