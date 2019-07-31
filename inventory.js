function Inventory(){
	this.items = [];

	this.add = function(item){
		this.items.push(item);
		currentText = $('.inventory').text();
		console.log(this.items);
		var slotNum = this.items.length;
		if (slotNum < 9) {
			$( ".slot" ).eq( slotNum-1 ).addClass(item.class)
		}else{
			$( ".slot" ).eq( 8 ).addClass(item.class)
		}
	}
}
