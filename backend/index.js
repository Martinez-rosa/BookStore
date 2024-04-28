import express from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from'./routes/bookRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1: Allow All Origins with Default of cors (*)
app.use(cors());
//Option 2: Allow Custom Orings 
app.use(
    cors({
        oring: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],

    })
)



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
      


     


    
  




    






