const express=require('express');
const router=express.Router();
router.post('/calculate',async(req,res)=>{
    const{area ,floors, option,wall};
    const baseCost=area*1000+floors*5000;
    const totalCost=baseCost+(option.tength*2000)
    const newCalculation=({
        area,floors,walls,option,totalCost,})
    await newCalculation.save();
    res.json({totalCost});});
    module.exports=router;,