import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router()

//Route for Save a new Book
router.post('/', async (request , response) => {
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

// Route for Get All Books form database
router.get('/', async (request, response) => {
    try{
       const books = await Book.find({});

      return response.status(200).json({
        count: books.length,
        data: books,
       });
    } catch(error){
      console.log(error,message);   
      response.status(500).send({ message: error.message});
    }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
    try{

       const { id } = request.params;

       const books = await Book.findId(id);

      return response.status(200).json(book);
    } catch(error){
      console.log(error,message);   
      response.status(500).send({ message: error.message});
    }
});

//Route for Update a Book 
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.tittle ||
            !request.body.author ||
            !request.body.pubñishYear 
        ){
            return response.status(400).send({
                message:'Send all required fields: tittle, author, publishYear',

            });
        }
        
       const { id } = request.params;
       
       const  result = await Book.findByIdAndUpdate(id, request.body);

       if(!result){
        return response.status(404).json({message: 'Book not found'})
       }
       return response.status(200).send({message: 'Book updated successfully'})
    
    } catch(error){
      console.log(error,message);   
      response.status(500).send({ message: error.message});
    }
});

//Route for Delete a book
router.delete('/:id',async (request, response) => {
    try {
        
        const { id } = request.params;

        const  result = await Book.findByIdAndDelete(id);
       
        if(!result){
            return response.status(404).json({message: 'Book not found'})
        }
        return response.status(200).send({message: 'Book deleted successfully'})
        
    }  catch(error){
       console.log(error,message);   
       response.status(500).send({ message: error.message});
    }
});

export default router;