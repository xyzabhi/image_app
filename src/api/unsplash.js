import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GPuGHwxryfo05JYJvuK09FpyMubulbGsGt7FW9ip69I",
  },
});
