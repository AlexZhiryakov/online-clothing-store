import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3393'
});

// npx json-server -p 3393 -w src/data/db.json, если уже в cd pr нахожусь