const Category = require("../Models/categoryModel");

const categoryController = {
  async index(req, res, next) {
    let Categories;
    try {
      Categories = await Category.find();
    } catch (error) {
      res.status(404).json({ error: "Server error.", serverError: error });
    }
    res.status(200).json(Categories);
  },
  async store(req, res, next) {
    let cat;
    try {
      const { title, description } = req.body;
      cat = await Category.create({ 
        title, 
        description,
        thumbnail: "Uploads/category/thumbnail" + req.file.filename,
       });
    } catch (error) {
      res.status(500).json({ error: "server error:", serverError: error });
    }
    res.status(201).json(cat);
  },
  async delete(req, res, next) {
    let cat;
    try {
      const { id } = req.body;
      cat = await Category.findByIdAndDelete({ _id: id });
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
    }
    res.status(200).json(cat);
  },
  async update(req, res, next) {
    let cat;
    try {
      const { id } = req.params;
      console.log(req.params);
      
      const { title, description } = req.body;
      console.log(req.body);
      cat = await Category.findByIdAndUpdate(
        {_id: id },
        { title, description },
        { new: true }
      );
    } catch (error) {
      res.status(500).json({ error: "server error:", serverError: error });
    }
    res.status(200).json(cat);
  },
};
module.exports = categoryController;
