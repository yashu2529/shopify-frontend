import axios from "axios";

const api = axios.create({
 baseURL: "https://shopify-backend-3-095m.onrender.com/"
});

export default api;
