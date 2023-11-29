
import { useEffect, useState, useCallback } from "react";

// const APIKEY = process.env.YOUR_API_KEY;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState([]);

  const fetchGifs = useCallback(async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EGffLzDAp1JPjtsA4p9T17HQgQVgKoUg&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  }, [keyword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchGifs();
        // Process the data...
      } catch (error) {
        // Handle errors...
        console.log(error);
      }
    };
  
    if (keyword) {
      fetchData();
    }
  
  }, [keyword, fetchGifs]); // Include fetchGifs in the dependency array
  

  return gifUrl;
};

export default useFetch;