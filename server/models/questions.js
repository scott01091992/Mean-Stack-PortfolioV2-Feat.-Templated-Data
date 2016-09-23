var QuestionSchema = new mongoose.Schema({

	question: {type: String, required: true, minlength: 10},
	description:{type: String},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true}, 
	_answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answers'}]

}, {timestamps: true});

mongoose.model('Questions', QuestionSchema);

