import mongoose from "mongoose";

const bookSchmea = mongoose.Schema(

    {
        title: {
            type: String, 
            required: true,
        },
        author: {
            type: String, 
            required: true,
        },
        publishYear: {
            type: Number, 
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

 export const Book = mongoose.model('El Alquimista', bookSchmea);