function EntityHandler() {
  function randomNum(x, y) {
    output = Math.floor(Math.random() * (x - y) + y);
    return output;
  }
  this.dic = [{id:0, name: "Potion of Healing", attribute: 0,byAmount:30,class:"potion-healing"},
  {id:1, name: "Potion of Speed", attribute: 1,byAmount:25,class:"potion-speed"},{id:2, attribute: 5,byAmount:5,name: "Coin", class:"coin"},{id:100, name: "Slime", class:"enemy", speed: "20", health: "10", difficulty: "1"},{id:101, name: "Witch", class:"enemy", speed:"80", health: "200", difficulty: "5"}
  ];

  this.places = [];
  //append potions and monsters to places
  var healthpotCount = randomNum(2, 5);
  for (var c = 0; c <= healthpotCount; c++) {
    this.places.push([randomNum(5,25),randomNum(5,25),0]);
  };

  var speedpotCount = randomNum(2, 5);
  for (var c = 0; c <= speedpotCount; c++) {
    this.places.push([randomNum(5,25),randomNum(5,25),1]);
  };

  var slimeCount = randomNum(5, 6);
  for (var c = 0; c <= slimeCount; c++) {
    this.places.push([randomNum(5,25),randomNum(5,25),100]);
  };

  var witchCount = randomNum(2, 4);
  for (var c = 0; c <= witchCount; c++) {
    this.places.push([randomNum(5,25),randomNum(5,25),101]);
  };

  var coinCount = randomNum(7, 10);
  for (var c = 0; c <= coinCount; c++) {
    this.places.push([randomNum(5,25),randomNum(5,25),90]);
  };



  this.pickUp = function(x,y,type,id){
    for (var i = 0; i < this.places.length; i++) {
      if (this.places[i][0] == x) {
        if (this.places[i][1] == y) {
          if (type < 100){
          this.places.splice(i, 1);
          inventory.add(this.dic[type]);
          draw();
          }
          else if (type >= 100 && type <= 150){
            var obj = this.dic.find(o => o.id === type);
            console.log(obj.health);
            fightHandler.battle([obj.health,obj.speed,obj.difficulty])
            this.places.splice(i, 1);
            draw();
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
