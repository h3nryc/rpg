function Player(x,y) {
  this.level = 1;
  this.health = 100;
  this.score = 0;
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
    square(5*25, 5*25, 25);
  };

}
