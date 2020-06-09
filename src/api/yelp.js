import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses", 
    headers: {
        Authorization: "Bearer -XqjeGyUUS1Wl7ShIyYuERVueVK-6K1J1oyas0SOnIn67-tijrhn3ma6tMVKiuKvEJ69SmAn_bHM3gbqF3rjyu9J_fZIm0E_PXlpekQdHo0s8UHOOxPTbTmuuv7eXnYx"
    }
});