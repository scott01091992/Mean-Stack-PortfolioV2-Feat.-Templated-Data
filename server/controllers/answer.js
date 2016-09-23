
var Answers = mongoose.model('Answers');
var Questions = mongoose.model('Questions');
var Users = mongoose.model('Users');

module.exports = (function(){

	return{
		index: function(req, res){
			Answers.find({}, function(err, answers){
		        if (err){
		          console.log(err);
		        }else{
					res.json(answers);
				}
		    });
		}, 
		create: function(req, res){

			var answer = new Answers(req.body);

			answer.save(function(err){

				if(err){
					console.log(err);
				}

				else{
					Users.findByIdAndUpdate(answer._user, {$push: {_answers: answer._id}}, function(err){
						if(err){
							console.log(err);
						}
						else{
							Questions.findByIdAndUpdate(answer._question, {$push: {_answers: answer._id}}, function(err){
								if(err){
									console.log(err);
								}
								else{
									res.redirect('/questions');
								}
							});
						}	
					});
				}
			});
		}, 

		like: function(req, res){
			Answers.findOne({_id: req.params.id}, function(err, answer){
		        if (err){
		          console.log(err);
		        }else{
		        	likes = answer.likes + 1;
		          	Answers.findByIdAndUpdate(req.params.id, {$set: {likes: likes}}, function(err){
						if(err){
							console.log(err);
						}
						else{
							console.log(req.body.qid);
							res.redirect('/questions/'+req.body.qid);
						}
					});
		        }
     		});
		},
	}

})();