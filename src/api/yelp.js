import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer jBrvCiwxL3cnp0FbXtmYomLaEm7HhQE9qgi_If6VhVcGyXl5nIVrh05_3DHDngOyElDP5hPIhwvfi2tJqKXb82epIbJ0SzO34nTFq_8NsHHneTFw265emG5vEJVaX3Yx",
  },
});
