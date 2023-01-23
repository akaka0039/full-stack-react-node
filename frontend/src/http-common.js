import axios from "axios";

export default axios.create({
    // backend
    baseURL: "http://localhost:5000/api/v1/restaurants",
    headers: {
        "Content-type":  "application/json"
    }
});