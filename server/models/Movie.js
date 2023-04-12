const mongoose =require ("mongoose");

const movieSchema = new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String, required:true},
    year:{type:Number,requied:true},
    genre:{type:[String],requied:true},
    rating:{type:Number,required:true}
});

module.exports=mongoose.model("movie",movieSchema);