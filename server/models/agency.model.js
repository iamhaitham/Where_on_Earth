const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
    agencyName: { 
        type: String,
        required:true
     },
     agencyAddress:{
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
        bookers:[{
            bookerName:{
                type:String
            },
            bookerEmail:{
                type:String
            }
        }]
    }]
    
}, { timestamps: true });
module.exports.Agency = mongoose.model('Agency', AgencySchema);