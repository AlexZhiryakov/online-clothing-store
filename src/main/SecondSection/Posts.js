import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3391' : 'https://alexzhiryakov.github.io/online-clothing-store/';

export default axios.create({
    baseURL: baseURL
});

// npx json-server -p 3391 -w src/data/db.json, если уже в cd pr нахожусь