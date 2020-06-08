import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer pLsBPHlkcqKlrPLtd-MPVx3VtL3cjA8UBBiDxxWbjerRzNMwItfN2qKZ-mhl_oTliDTcqvpSopidrw1re4kjC27vzVvF5yFvItLW5Tn1HZXMwN3U9SDgWf7V5pfIXnYx",
  },
});

//Authorization needs to be capitalized
//Bearer needs to be included before the api key is used
// yelp.get("/search");  is being concatenated to the baseURL
