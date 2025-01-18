const mongoose=require('mongoose');
const CalculationSchema=new mongoose.Schema({
    area:Numder,
    floors:Number,
    wall: String,
    option:[String],
    totalCost:Numder,})
module.exports=mongooser.model('Calculation', CalculationSchema);
