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

	this.drawItems = function(){
		for (var i = 0; i < this.items.length; i++) {
			if (i < 9) {
				$( ".slot" ).eq( i-1 ).addClass(this.items[i].class)
				$( ".slot" ).eq( i-1 ).attr('title', this.items[i].name);
			}else{
				$( ".slot" ).eq( 8 ).addClass(this.items.class)
			}
		}
	}

	this.remove = function(id){
		console.log(1);
		$( ".slot" ).eq( id ).removeClass(this.items[id].class)
		$( ".slot" ).eq( id ).attr('title', "");
		this.items.splice(id, 1);
	}

	this.use = function(id){
		console.log(this.items[0]);
		player.updateStat(this.items[id].attribute,true,this.items[id].byAmount)
	}
}
