const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
  // Book information
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
  isbn: {
    type: String,
    unique: true, // Ensures each book has a unique ISBN
  },
  // Publication details
  publisher: {
    type: String,
  },
  publishedDate: {
    type: Date,
  },
  // Inventory and pricing
  stock: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
  },
});

const booksModel = mongoose.model('books', bookSchema);
module.exports = booksModel;

// // Additional features
// coverImage: {
//     type: String, // URL or path to the cover image
//   },
//   reviews: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Review', // Reference to Review schema
//   }],
//   averageRating: {
//     type: Number,
//   },