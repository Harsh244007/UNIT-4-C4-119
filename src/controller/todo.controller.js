const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");

router.get("", async(req,res)=>{
    try {
        const todos = await Todo.find().lean().exec();
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.post("", async(req,res)=>{
    try {
        const todos = await Todo.create(req.body);
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const todos = await Todo.findById(req.params.id).lean().exec();
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});


router.patch("/:id",async(req,res)=>{
    try {
        const todos = await Todo.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(200).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const todos = await Todo.findByIdAndDelete(req.params.id, req.body);
        return res.status(201).send({todos:todos});
    } catch (error) {
        return res.status(400).send({error:error.message});
    }
});

module.exports = router;