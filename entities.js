function EntityHandler() {
  function randomNum(x, y) {
    output = Math.floor(Math.random() * (x - y) + y);
    return output;
  }
  this.dic = [{id:0, name: "Potion of Healing", attribute: 0,byAmount:30,class:"potion-healing"},
  {id:1, name: "Potion of Speed", attribute: 1,byAmount:25,class:"potion-speed"},{id:2, attribute: 5,byAmount:5,name: "Coin", class:"coin", value:"5"},{id:100, name: "Slime", class:"enemy", speed: "20", health: "10", difficulty: "1"},{id:101, name: "Witch", class:"enemy", speed:"80", health: "200", difficulty: "5"}
  ];

  var cMap = mapGen.createLevel();

  this.places = [];
  //append potions and monsters to places
  var healthpotCount = randomNum(2, 5);
  for (var c = 0; c <= healthpotCount; c++) {
    var x = randomNum(5,25);
    var y = randomNum(5,25);
    var flag = true;
      if (cMap[x][y].canStep == undefined) {
        this.places.push([x,y,0]);
      }else {
        var x = randomNum(5,25);
        var y = randomNum(5,25);
        if (cMap[x][y].canStep == undefined) {
          this.places.push([x,y,0]);
        }
      }
  };

  var speedpotCount = randomNum(2, 5);
  for (var c = 0; c <= speedpotCount; c++) {
    var x = randomNum(5,25);
    var y = randomNum(5,25);
    var flag = true;
      if (cMap[x][y].canStep == undefined) {
        this.places.push([x,y,1]);
      }else {
        var x = randomNum(5,25);
        var y = randomNum(5,25);
        if (cMap[x][y].canStep == undefined) {
          this.places.push([x,y,1]);
        }
      }
  };


  var slimeCount = randomNum(5, 6);
  for (var c = 0; c <= slimeCount; c++) {
    var x = randomNum(5,25);
    var y = randomNum(5,25);
    var flag = true;
      if (cMap[x][y].canStep == undefined) {
        this.places.push([x,y,100]);
      }else {
        var x = randomNum(5,25);
        var y = randomNum(5,25);
        if (cMap[x][y].canStep == undefined) {
          this.places.push([x,y,100]);
        }
      }
  };

  var witchCount = randomNum(2, 4);
  for (var c = 0; c <= witchCount; c++) {
    var x = randomNum(5,25);
    var y = randomNum(5,25);
    var flag = true;
      if (cMap[x][y].canStep == undefined) {
        this.places.push([x,y,101]);
      }else {
        var x = randomNum(5,25);
        var y = randomNum(5,25);
        if (cMap[x][y].canStep == undefined) {
          this.places.push([x,y,101]);
        }
      }
  };

  var coinCount = randomNum(7, 10);
  for (var c = 0; c <= coinCount; c++) {
    var x = randomNum(5,25);
    var y = randomNum(5,25);
    var flag = true;
      if (cMap[x][y].canStep == undefined) {
        this.places.push([x,y,2]);
      }else {
        var x = randomNum(5,25);
        var y = randomNum(5,25);
        if (cMap[x][y].canStep == undefined) {
          this.places.push([x,y,2]);
        }
      }
  };



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
