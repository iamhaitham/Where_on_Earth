const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
    agencyName: { 
        type: String,
        required:true
     },
     agencyAddress:{
        type:String
     },
     agencyPicture:{
         type:String
     },
    agencyTours:
        [{
        tourName:{
            type:String
        },
        tourPrice:{
            type:Number
        },
        tourDescription:{
            type:String
        },
        tourPicture : {
            type : String
        },
        limit:{
            type:Number
        },
        bookers:[{
            bookerName:{
                type:String,
                required: [true,"bookerName is required"], 
            },
            bookerEmail:{
                type:String,
                required: [true,"bookerEmail is required"],
            }
        }]
    }]
    
}, { timestamps: true });
module.exports.Agency = mongoose.model('Agency', AgencySchema);