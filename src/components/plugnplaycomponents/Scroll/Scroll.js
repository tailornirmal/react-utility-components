import React, { useState, useEffect, useRef } from "react";

const InfiniteScrollExample = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=10&skip=${page < 2 ? 0 : page * 10}`
      );
      const data = await response.json();

      console.log("data", data);

      setItems((prevItems) => [...prevItems, ...data?.quotes || []]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  console.log(items);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.quote}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default InfiniteScrollExample;
