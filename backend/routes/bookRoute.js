const express = require('express')
const router = express.Router()
const bookModel=require('../src/model/bookModel')
const mongoose=require('mongoose')


router.post('/',async(req,res)=>{
console.log('body',req.body);
    try{

        const bookMod=new bookModel({
            Bcode:req.body.Bcode,
            Bname:req.body.Bname,
            Bauthor:req.body.Bauthor,
            Bgenere:req.body.Bgenere,
            Bimage:req.body.Bimage
        })
        await bookMod.save()

        res.json({

            success:1,
            message:'Book successfuly saved'

        })

    }
    catch(err){
        res.json({
            success:0,
            message:'error occuured while saving'+err
        })

    }
})


router.get('/',async(req,res)=>{
    try{
        let allBook=await bookModel.find()
        res.json({
            success:1,
            message:'books listed succesfuly',
            item:allBook
        })
    }
    catch(err){
        res.json({
        success:0,
        message:'error occured while testing'+err
        })
    }
})

router.get('/:id',async(req,res)=>{
    let id=req.params.id

    let ValidId=mongoose.Types.ObjectId.isValid(id)
    if(ValidId){
        try{

            let singleBook=await bookModel.findById({_id:id})
            res.json({
                success:1,
                message:'single book listed',
                item:singleBook
            })


        }
        catch(err){
            res.json({
                            success:0,
                            message:'error occured while listing single Book'+err
                    })
        }

    }
    else{
        res.json({
            success:0,
            message:'invalid id'
        })

    }
})


router.delete('/:id',async (req,res)=>{
    let id=req.params.id

    let validId=mongoose.Types.ObjectId.isValid(id)
    if (validId){
        try{
            await bookModel.deleteOne({_id:id})
            res.json({
                success:1,
                message:'Book deleted successsfully'
            })
        }
        catch(err){

            res.json({
                success:0,
                message:'error occured while deleting'+err
            })

        }
    }
})


module.exports=router