function Inventory(){
	this.items = [];

	this.add = function(item){
		this.items.push(item);
		currentText = $('.inventory').text();
		console.log(currentText);
		if (currentText == 'Inventory: ') {
			$('.inventory').text('Inventory: '+item.name)
		}else{
			$('.inventory').text(currentText +', '+ item.name);
		}
	}
}
