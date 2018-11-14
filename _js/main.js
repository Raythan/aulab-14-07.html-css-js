function alertPassword(){
	var inputAlert = document.getElementById("inputErro").value,
	inputAlert1 = document.getElementById("inputErro1").value,
	spanAlert = document.getElementById("spanErro");
	if(inputAlert == ""){
		spanAlert.innerHTML = "Valor não pode ser vazio.<br/>";
	}else{
		if(inputAlert!=inputAlert1){
			spanAlert.innerHTML = "Esses números não são iguais.<br/>";
		}else{
			if(inputAlert.length<8){
				spanAlert.innerHTML = "A senha precisa ter 8 caracteres.<br/>";
			}else{
				spanAlert.innerHTML = "";
			}
		}
	}
	
	
}