function Inventory(){
	this.items = [];

	this.add = function(item){
		this.items.push(item);
		currentText = $('.inventory').text();
		console.log(this.items);
		var slotNum = this.items.length;
		if (slotNum < 9) {
			$( ".slot" ).eq( slotNum-1 ).addClass(item.class)
			$( ".slot" ).eq( slotNum-1 ).attr('title', item.name);
		}else{
			$( ".slot" ).eq( 8 ).addClass(item.class)
		}
	}

	this.use = function(id){
		console.log(this.items[0]);
		player.updateStat(this.items[id].attribute,true,this.items[id].byAmount)
	}
}
