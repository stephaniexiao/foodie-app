import { useEffect, useState } from "react";
import yelp from "../api/yelp.js";

export default function useBusinesses() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchValue) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchValue,
          location: "Berkeley",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      //async function needs to handle errors
      setErrorMessage("Error. Try again later.");
    }
  };

  useEffect(() => {
    searchApi("hawaiian");
  }, []);

  return [results, errorMessage, searchApi];
}
