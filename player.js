function Player(x,y) {
  this.level = 1;
  this.attr = [100,50,50,50,50,0];
  this.cX = 0;
  this.cY = 0;
  this.x = 0;
  this.y = 0;

  this.changeColor = function () {
    var r = prompt('select r value');
    if (0 <= r <= 255){
      localStorage.setItem("r", r);
      console.log("worked");
    }
    else{
      console.log("didnt work");
    }
    var g = prompt('select g value');
    if (0 <= g <= 255){
      localStorage.setItem("g", g);
    }
    else{
      console.log("didnt work");
    }
    var b = prompt('select b value');
    if (0 <= b <= 255){
      localStorage.setItem("b", b);
    }
    else{
      console.log("didnt work");
    }
  }

  this.show = function(){
    this.x = 5+this.cX;
    this.y = 5+this.cY;
    noStroke();
    c = color('rgb('+localStorage.getItem("r")+','+localStorage.getItem("g")+','+localStorage.getItem("b")+')');
    fill(c);
    square(5*25+5, 5*25+5, 15);
  };

  this.updateSavedStats = function () {
    var stats = JSON.parse(localStorage.getItem('playerStat'))
    this.attr = stats;
    this.drawStats();
  }
  this.saveStat = function () {
    var item = JSON.stringify(this.attr)
    localStorage.setItem('playerStat', item);
    player.updateSavedStats();
  }

  this.drawStats = function() {
    for (var i = 0; i < this.attr.length; i++) {
      $( "li" ).eq( i ).find( ".prog-bar-inner" ).css("width", this.attr[i]+'%');
      $( "li" ).eq( i ).find( ".prog-bar-inner" ).text(this.attr[i]);
    }
  }

  this.updateStat = function(id,pos,amount){
    if (pos) {
      this.attr[id] = this.attr[id] + amount;
    }else{
      this.attr[id] = this.attr[id] - amount;
      if (id == 0) {
        if (this.attr[id] <= 0) {
          alert('YOU HAVE DIED!')
          location.reload();
        }
      }
    }
    this.drawStats();
  }
}
