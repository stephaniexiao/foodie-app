import { useEffect, useState } from "react";
import yelp from "../api/yelp.js";

export default function useBusinesses () {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchValue) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 25,
          term: searchValue, 
          location: "Berkeley",
        },
      });
      setResults(response.data.businesses);
    } catch (error) { //async function needs error message
      setErrorMessage("Error. Try again later.");
    }
  };

  useEffect(() => {
    searchApi("pizza")}, []
  );

  return [results, errorMessage, searchApi];
}
