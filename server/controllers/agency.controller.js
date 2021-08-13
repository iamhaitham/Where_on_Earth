const { Agency } = require('../models/agency.model');


module.exports.createAgency = (request, response) => {
    const { agencyName, agencyAddress, agencyTours, agencyPicture } = request.body;
    Agency.create(request.body)
        .then(agency => response.json(agency))
        .catch(err => response.json(err));
}

module.exports.getAllAgencies = (request, response) => {
    Agency.find({})
        .then(agencies => response.json(agencies))
        .catch(err => response.json(err))
}

module.exports.getAgency = (request, response) => {
    Agency.findOne({_id:request.params.id})
        .then(agency => response.json(agency))
        .catch(err => response.json(err))
}

module.exports.updateAgency = (request, response) => {
    Agency.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAgency => response.json(updatedAgency))
        .catch(err => response.json(err))
}

module.exports.deleteAgency = (request, response) => {
    Agency.findOneAndDelete({_id : request.params.id})
        .then(agency => response.json(agency))
        .catch(err => response.json(err));
}

module.exports.updateBooker = (request, response) => {
    Agency.findOneAndUpdate({'_id' : request.params.agencyId, 'agencyTours._id' : request.params.tourId}, 
    {'$push' : {'agencyTours.$.bookers' : request.body}})
        .then(res => response.json(res))
        .catch(err => response.json(err));
}