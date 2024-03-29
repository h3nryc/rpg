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

	this.emptyItems = function(){
		for (var id = 0; id < this.items.length; id++) {
			for (var i = 0; i < 8; i++) {
				$( ".slot" ).eq( i ).removeClass(this.items[id].class)
				$( ".slot" ).eq( i ).attr('title', "");
				}
		}
		this.drawItems();
	}

	this.drawItems = function(){
		for (var i = 0; i < this.items.length; i++) {
				console.log(i);
				console.log($( ".slot" ));
				$( ".slot" ).eq( i ).addClass(this.items[i].class)
				$( ".slot" ).eq( i ).attr('title', this.items[i].name);
		}
	}

	this.remove = function(id){
		console.log(1);
		$( ".slot" ).eq( id ).removeClass(this.items[id].class)
		$( ".slot" ).eq( id ).attr('title', "");
		this.items.splice(id, 1);
		this.emptyItems();
	}

	this.use = function(id){
		if (player.attr[this.items[id].attribute] == 100){
			alert('You can\'t use that now.')
		}else if ((player.attr[this.items[id].attribute] + this.items[id].byAmount) <= 100) {
			player.updateStat(this.items[id].attribute,true,this.items[id].byAmount)
			this.remove(id)
		}else if ((player.attr[this.items[id].attribute] + this.items[id].byAmount) > 100){
			//player.updateStat(this.items[id].attribute,true,this.items[id].byAmount)
			player.attr[this.items[id].attribute] = 100;
			player.drawStats();
			this.remove(id)
		}
	}
}
