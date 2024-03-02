const express = require("express");
const controller = require("../controller/controller");
const bookRouter = express.Router();  // Instantiate the router

bookRouter.get("/", controller.getAllBooks);
bookRouter.post("/", controller.createBook);
bookRouter.get('/:id', controller.getBookById);
bookRouter.get('/:id', controller.getBookById2);


module.exports = bookRouter;
