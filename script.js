	
	function passwordId(num){
		num = num.toString();
		if(num.length === 18){
			var start = num.slice(0,6);
			var date = num.slice(6,14);
			var result = start+'<b>'+date+'</b>'+'****';
			return result;
		}else{
			return '您输入的身份证号有误。';
		}
	}

	var mine = '130129199903203035';
	document.write(passwordId(mine));