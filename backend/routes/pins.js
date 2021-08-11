const router = require("express").Router();
const Pin = require("../models/Pin.js");

//create a pin

router.post("/", async (req,res)=>{
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all pins

router.get("/", async (req,res)=>{
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete a pin

router.delete("/:id", async (req,res) =>{
    const { id: _id } = req.params;
    try {
        const deletePin = await Pin.findByIdAndDelete(_id);
        res.json(deletePin);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router