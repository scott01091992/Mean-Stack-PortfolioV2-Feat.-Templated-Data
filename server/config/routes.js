var users = require('./../controllers/user.js');

var questions = require('./../controllers/question.js');

var answers = require('./../controllers/answer.js');


module.exports = function(app){


	//get all answers
	app.get('/answers', answers.index);
	//get answer by id
	app.post('/answers', answers.create);
	//like by id
	app.post('/answers/like/:id', answers.like);

	//get all questions
	app.get('/questions', questions.index);
	//create a question
	app.post('/questions', questions.create);
	//get single question info
	app.get('/questions/:id', questions.show);

	//get single user by id
	app.get('/users/:id', users.show);
	//create a user
	app.post('/users', users.create);
}