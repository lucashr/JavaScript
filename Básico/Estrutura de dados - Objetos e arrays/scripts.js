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

Elevador.print();