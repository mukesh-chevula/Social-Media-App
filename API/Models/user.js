const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:10,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:20
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:""
    },
    following:{
        type:Array,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        max:100,
        default:""
    },
    city:{
        type:String,
        max:100,
        default:""
    },
    from:{
        type:String,
        max:100,
        default:""
    },
    relationship:{
        type:Number,
        enum : [1,2,3]
    }
},
{timestamps:true})

module.exports = mongoose.model("User", userSchema)