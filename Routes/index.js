const express = require('express');
const { categoryController } = require('../Controllers');
    const router = express.Router();
    const multer = require("multer");
    const path = require("path");
    const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Uploads/category/thumbnail');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(
        null,
        file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
        );
    }
  })



  
  const upload = multer({ storage: storage })
router.get("category", categoryController.index);
router.post("/category", categoryController.store);
router.delete("/category", categoryController.delete);
router.put("/category/:id", categoryController.update);
router.post("/category",upload.single('thumbnail'),categoryController.store);


module.exports = router;
