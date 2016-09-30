myApp.factory('mainFactory', function($http){
	var factory = {};

	factory.getQuestions = function(callback){
		callback([
			{question: "Tell me a little bit about yourself?", answer: "I am an aspring web developer, who loves to learn and challenge myself. I recently graduated and am working as a contractor for Instacart until I get an opportunity to kickstart my career. I spend my free time learning new skills and practicing design."},
			{question: "What would you say your strengths are?", answer: "I am intellegent, collaborative, and have a very steep learning curve. Learning new things is very easy for me, and I thrive on a good challenge."},
			{question: "What are your weaknesses?", answer: "One of my weaknesses stems from my tendancy towards perfection. Sometimes just moving on is better than fixing everything. Another thing that can cause issues for me, I really like solving problems, and I can spend a lot of my free time focused on a problem that doesn't necessarily need to be solved."},
			{question: "In your free time, what do you find yourself doing?", answer: "In my free time, I like to learn about design, practice building assets, code new websites. Cooking is another passion of mine. I like to practice cooking to learn to be more efficient in the kitchen."},
			{question: "Do you work well in a team?", answer: "I have worked as an associate, and as a manager, and I have always been great at customer service. I love to work with professionals, exchanging ideas and reaching an optimal solution. I'm always on the lookout for experts who can share insights into their fields of interest."},
			{question: "Where do you see yourself in 5 years?", answer: "In 5 years I will likely have mastered 2 additional development languages, have a system language learned. I will be working on complex problems and providing design solutions. I want to have gone back to school to get a masters in computer science. So i'll likely still be in school at that time."},
			{question: "What sets your apart from your competition?", answer: "I love to code, I learn quickly, I am great with people and I have all the reasons in the world to do great work. Plus, I am fun, energetic and stay cool under pressure."}
		]);
	}

	factory.send_message = function(name, email, message, callback){
		$http.post('/message', {name: name, email: email, message: message}).success(function(output){
			callback(output);
		});
	}

	return factory;
});
