function clothoTest(){
		var username = "anero";
		var password = "alie";
		Clotho.createUser(username,password).then(function(result){
			alert(JSON.stringify(result));
			console.log(result);
		});
		Clotho.login(username,password).then(function(result){
			alert(JSON.stringify(result));
			console.log(result);
		});
		var obj = {};
		obj["name"] = "example";
		obj["dna"] = "tcgctcgc";
		obj["schema"] = "org.clothocad.model.sequence";
		Clotho.create(obj).then(function(result){
			alert(JSON.stringify(result));
			console.log(result);
		});

		var key = "name";
		var value = "example";
		var obj2 = {};
		obj2[key] = value;
		Clotho.query(obj2).then(function(result){
			alert(JSON.stringify(result));
			console.log(result);
		});
	}

	function deleting(){
		var id = document.getElementById("dIdValue").value;
		Clotho.destroy(id).then(function(result){
			alert(JSON.stringify(result));
			console.log(result);
		});
	}
