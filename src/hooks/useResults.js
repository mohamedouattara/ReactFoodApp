import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const SearchApi = async (searchTerm) => {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          term: searchTerm,
          limit: 50,
          location: "paris",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    SearchApi("tacos");
  }, []);

  return [results, SearchApi, errorMessage];
};
