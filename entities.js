function EntityHandler() {
  this.dic = [{id:0, name: "Potion of Healing", attribute: 0,byAmount:30,class:"potion-healing"},
  {id:1, name: "Potion of Speed", attribute: 1,byAmount:25,class:"potion-speed"},{id:100, name: "Slime", class:"enemy", speed: "20", health: "10", difficulty: "1"},{id:101, name: "Witch", class:"enemy", speed:"80", health: "200", difficulty: "5"},{id:90, attribute: 7,byAmount:1,name: "Coin", class:"item", value:"5"}
  ];
  this.places = [[8,8,0],[12,12,0],[9,10,0],[10,10,1],[15,15,100],[20,20,100],[15,17,101],[12,13,90]];

  this.pickUp = function(x,y,type){
    for (var i = 0; i < this.places.length; i++) {
      if (this.places[i][0] == x) {
        if (this.places[i][1] == y) {
          if (type < 100){
          this.places.splice(i, 1);
          console.log(this.dic);
          inventory.add(this.dic[type]);
          draw();
          }
          else if (type >= 100){
            console.log("battle");
            fightHandler.battle([100,100,1])
            this.places.splice(i, 1);
            draw();s
          }
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
          return [true,this.places[i][2],i]
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

//fightHandler.battle([100,100,1]) [health, speed, difficulty]
