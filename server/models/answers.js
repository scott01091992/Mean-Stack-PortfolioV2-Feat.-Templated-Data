var AnswerSchema = new mongoose.Schema({

	answer: {type: String, required: true, minlength:5},
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true}, 
	_question: {type: mongoose.Schema.Types.ObjectId, ref: 'Questions', required: true},
	details: {type: String},
	likes: {type: Number, required: true}

}, {timestamps: true});

mongoose.model('Answers', AnswerSchema);

