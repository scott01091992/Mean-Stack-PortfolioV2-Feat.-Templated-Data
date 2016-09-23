
var Users = mongoose.model('Users');

module.exports = (function(){

	return{
		show: function(req, res){
			Users.findOne({_id: req.params.id}, function(err, user){
		        if (err){
		          console.log(err);
		        }else{
		          res.json(user);
		        }
     		})
		},
		create: function(req, res){
			var user = new Users(req.body);
			user.save(function(err){
				if(err){
					console.log(err);
				}
				else{
					res.json(user);
				}
			});
		}
	}

})();