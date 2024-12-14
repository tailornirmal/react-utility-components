import React, { useEffect, useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 100,
  maximumAge: 0,
};

export default function Geolocation() {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    accuracy: "",
  });
  const [error, setError] = useState({ code: "", message: "" });

  useEffect(() => {
    if ("geolocation" in navigator && window.navigator) {
      navigator.geolocation.getCurrentPosition(success, errorFn, options);
    } else {
        setError({ code: 404, message: 'Geolocation is not supported by this browser' });
    }
  }, []);

  const success = (pos) => {
    const crd = pos.coords;
    const location = {
      latitude: crd.latitude,
      longitude: crd.longitude,
      accuracy: crd.accuracy,
    };

    setLocation(location);
  };

  const errorFn = ({ code, message }) => {
    console.warn(`ERROR(${code}): ${message}`);
    setError({ code, message });
  };

  console.log(location);
  console.log(error);

  let content = "";
  if (error.code && error.message) {
    content = `Sorry. there is an error in fetching location. ${error?.message}`;
  } else {
    content = `You are located at latitude : ${location.latitude} and longitude : ${location.longitude} with accuracy near to ${location.accuracy} meter`;
  }

  return <div>{content}</div>;
}
