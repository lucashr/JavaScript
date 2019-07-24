var myObj = {
	length: 15,
	color: 'yellow',
	write: function(){
		console.log('Hello');
	}
}

function min(numbers){
	var min = numbers[0]
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] < min) {
			min = numbers[i]
		}
	}

	return min;
}

var Elevador = {
	andarAtual: 0,
	total: 3,
	print (){
		console.log(`Andar: ${this.andarAtual}`);
	},

	subir(){
		if(this.andarAtual < this.total){
			this.andarAtual++	
		}
		this.print();
		
	},

	descer(){
		if(this.andarAtual > 0){
			this.andarAtual--;	
		}
		this.print();
	}

}

var number = Math.trunc(Math.random() * 10)
switch(number){
	case 0:
		console.log("Olá td bom?")
	break
	case 1:
		console.log("Meu nome e Robot")
	break
	case 2:
		console.log("Fala de onde?")
	break
	case 3:
		console.log("Nao moro por aqui. Desculpe.")
	break
	case 4:
		console.log("Conhece alguem de onde eu venho?")
	break
	case 5:
		console.log("Você e muito inteligente")
	break
	case 6:
		console.log("Nos vemos mais tarde")
	break
	case 7:
		console.log("Como vai voce?")
	break
	case 8:
		console.log("Não estou afim de conversar")
	break
	case 9:
		console.log("Seria uma honra")
	break
	case 10:
		console.log("Eu vou dar choque no seu sistema")
	break
}

function missingLetters(text){
	text = text.toLowerCase();
	var missing = '';
	var letters = {
		'a': 0,
		'b': 0,
		'c': 0,
		'd': 0,
		'e': 0,
		'f': 0,
		'g': 0,
		'h': 0,
		'i': 0,
		'j': 0,
		'k': 0,
		'l': 0,
		'm': 0,
		'n': 0,
		'o': 0,
		'p': 0,
		'q': 0,
		'r': 0,
		's': 0,
		't': 0,
		'u': 0,
		'v': 0,
		'w': 0,
		'x': 0,
		'y': 0,
		'z': 0,
	};
	for(var i = 0 ; i < text.length ; i++){
		var letter = text[i]
		if(letter !== ' '){
			letters[letter]++;
		}
	}
	
	for(l in letters){
		if(letters[l] === 0){
			missing += l;
		}
	}
	
	return missing.split('');
	

}
