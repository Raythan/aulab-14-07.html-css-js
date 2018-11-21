function alertPassword(){
	var inputAlert = document.getElementById("inputErro").value,
	inputAlert1 = document.getElementById("inputErro1").value,
	spanAlert = document.getElementById("spanErro"),
	spanAlert1 = document.getElementById("spanErro1");
	
	
	
	if(inputAlert===inputAlert1){
		if(inputAlert.length<8){
			spanAlert.innerHTML = "A senha precisa ter 8 caracteres.<br/>";
		}else{
			spanAlert.innerHTML = "";
		}
		if(inputAlert1.length<8){
			spanAlert1.innerHTML = "A senha precisa ter 8 caracteres.<br/>";
		}else{
			spanAlert1.innerHTML = "";
		}
	}else{
		spanAlert.innerHTML = "Esses números não são iguais.<br/>";
	}
	
	
}