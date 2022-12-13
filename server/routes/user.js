const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const products = mongoose.Schema;

const userSchema = new products({
    id: Number,
    description: String,
    imageurl: String
});

const userModel = mongoose.model('products', userSchema);

//get products
router.get('/getproducts', async (req, res) => {
    try{
        const data = await userModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get user by Id
router.get('/getuserbyid/:id', async (req, res) => {
    try{
        const data = await userModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;