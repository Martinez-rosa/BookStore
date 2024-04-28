import express from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from'./routes/bookRoute.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(235).send('Welcome to Book Store by Maura Martinez');
});

app.use('/books', booksRoute);


    

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to databse');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) =>  {
        console.log(error);
    });
      


     


    
  




    






