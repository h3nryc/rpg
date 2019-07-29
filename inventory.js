function Inventory(){
	this.items = [];

	this.add = function(item){
		this.items.push(item);
		currentText = $('.inventory').text();
		$('.inventory').text(currentText + item);
	}
}