var UserSchema = new mongoose.Schema({

	username: {type: String, required: true},
	_answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answers'}], 
	_questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Questions'}],

}, {timestamps: true});

mongoose.model('Users', UserSchema);

