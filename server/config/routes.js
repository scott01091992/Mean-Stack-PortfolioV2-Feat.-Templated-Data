var message = require('./../controllers/message.js');

module.exports = function(app){

	app.post('/message', message.save);

}
