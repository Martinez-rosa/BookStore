import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(235).send('Welcome to Book Store by Maura Martinez');
});
    
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});






