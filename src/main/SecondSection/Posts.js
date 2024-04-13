import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3391'
});

// npx json-server -p 3391 -w src/data/db.json, если уже в cd pr нахожусь