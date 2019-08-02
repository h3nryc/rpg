function EntityHandler() {
  this.dic = [{id:0, name: "Potion of Healing", attribute: 0,byAmount:30,class:"potion-healing"}];
  this.places = [[8,8,0],[12,13,0],[9,10,0]];

  this.pickUp = function(x,y,type){
    for (var i = 0; i < this.places.length; i++) {
      if (this.places[i][0] == x) {
        if (this.places[i][1] == y) {
          this.places.splice(i, 1);
          inventory.add(this.dic[type]);
          draw();
        }else{
          continue;
        }
      }else {
        continue;
      }
    };
  };

  this.checkPlacement = function(x,y){
    var checkArr = [x,y]
    for (var i = 0; i < this.places.length; i++) {
      if (this.places[i][0] == checkArr[0]) {
        if (this.places[i][1] == checkArr[1]) {
          return [true,this.places[i][2]]
        }else{
          continue;
        }
      }else {
        continue;
      }
    };
    return [false,null];
  };

  this.add = function(x,y,id){
    this.places.push([x,y,id])
  };
}
