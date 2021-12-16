const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    username:{
      type:String,
      require:true
    },
    password:{
        type:String,
        require:true,
        minlength: 6,
    }
});
const dataSchema=mongoose.Schema({
  content:{
    type:String,
    require:true
  },
  check:{
    type:Boolean,
    require:true
  },
  time:{
    type:String,
    require:true,
  },
  color:{
    type:String,
    require:true
  },
  userid:{
    type:String,
    require:true
  }
})
const userModel=mongoose.model('userModel',userSchema);
const dataModel=mongoose.model('dataModel',dataSchema);
module.exports={userModel,dataModel};
