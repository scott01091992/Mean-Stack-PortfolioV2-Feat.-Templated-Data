
var Answers = mongoose.model('Answers');
var Questions = mongoose.model('Questions');
var Users = mongoose.model('Users');

module.exports = (function(){

	return{
		index: function(req, res){
			Questions.find({}, function(err, questions){
		        if (err){
		          console.log(err);
		        }else{
					res.json(questions);
				}
		    });
		}, 
		create: function(req, res){
			var question = new Questions(req.body);
			question.save(function(err){
				if(err){
					console.log(err);
				}
				else{
					//add this answer ID to the user who made it
					Users.findByIdAndUpdate(question._user, {$push: {_questions: question._id}}, function(err){
						if(err){
							console.log(err);
						}
						else{
								res.redirect('/questions');
							}
			
					});	
				}
			});
		}, 
		show: function(req, res){
			Questions.findOne({_id: req.params.id})
							.populate('_answers')
							.exec(function(err, answers){
		        if (err){
		          console.log(err);
		        }else{
	        		console.log(answers);
		        	Users.populate(answers, {path: '_answers._user', model: 'Users'}, function(err, popQuestions){
		        		if(err){
		        			console.log(err);
		        		}
		        		else{
	        				res.json(popQuestions);
		        		}
		        	});    
		        }
     		});
		}
	}

})();