const AgencyController = require('../controllers/agency.controller');
module.exports = function(app){
    app.get('/api/agencies', AgencyController.getAllAgencies);
    app.post('/api/agencies', AgencyController.createAgency);
    app.get('/api/agencies/:id', AgencyController.getAgency);
    app.put('/api/agencies/:id', AgencyController.updateAgency);
    app.delete('/api/delete/:id', AgencyController.deleteAgency);
    app.put('/api/agencies/:agencyId/:tourId', AgencyController.updateBooker);
}