import express from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(235).send('Welcome to Book Store by Maura Martinez');
});


//Route for Save a new Book
app.post('/books', async (request , response) => {
    try {
        if(
            !request.body.tittle ||
            !request.body.author ||
            !request.body.pubñishYear 
        ) {
            return response.status(400).send({
                message: 'Send all required fielda: tittle, author, publishYear',
        });
    }
//Create a variable that holds the book
 const book = await Book.create(newBook);

 return response.status(201).send(book);
} catch (error) {
    console.log(error,message);
    response.status(500).send({ message: error.message});
}
            

});



    


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
  





