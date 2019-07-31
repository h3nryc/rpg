function Player(x,y) {
  this.level = 1;
  this.attr = [10,50,50,50,50];
  this.cX = 0;
  this.cY = 0;
  this.x = 0;
  this.y = 0;

  this.show = function(){
    this.x = 5+this.cX;
    this.y = 5+this.cY;
    noStroke();
    c = color('rgb(255,255,255)');
    fill(c);
    square(5*25+5, 5*25+5, 15);
  };

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
    }
    this.drawStats();
  }
}
