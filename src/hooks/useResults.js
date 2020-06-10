import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export const useResults = () => {
  const [results, setResults] = useState([]); // results could be renamed "restaurants" or "businesses"
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchValue) => {
    console.log("hi there");
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
      setErrorMessage("Sorry there was an error.");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [results, errorMessage, searchApi];
};
