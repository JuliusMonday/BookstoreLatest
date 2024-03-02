const booksModel = require("../models/models")

async function getAllBooks(req, res){
    try{
        const foundBooks = await booksModel.find({});
        res.send(foundBooks)
    }catch(error){
        res.send("Error while reading the database")
    }
}
async function getBookById(req, res){
    try {
      const bookId = req.params.id;
      const book = await booksModel.findById(bookId);
  
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json(book);
    } catch (error) {
      console.error('Error getting book by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

async function getBookById2(req, res){
    try {
      const bookId = req.query.id; // Use req.query.id instead of req.params.id
      const book = await booksModel.findById(bookId);
  
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json(book);
    } catch (error) {
      console.error('Error getting book by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

async function createBook(req,res){
    try{
        const clientDetails = req.body;
        const newBook = await booksModel.create(clientDetails)
        res.send("New book added!!")
    }catch(error){
        res.send("Creation of new book failed")
    }
}
module.exports = {getAllBooks, createBook, getBookById, getBookById2};