function clothoTest(){
		var username = "anero";
		var password = "alie";
		Clotho.createUser(username,password).then(function(result){
			alert(JSON.stringify(result));
		});
		Clotho.login(username,password).then(function(result){
			alert(JSON.stringify(result));
		});
		var obj = {};
		obj["name"] = "example";
		obj["dna"] = "tcgctcgc";
		obj["schema"] = "org.clothocad.model.sequence";
		Clotho.create(obj).then(function(result){
			alert(JSON.stringify(result));
		});


	}
