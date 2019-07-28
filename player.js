function Player(x,y) {
  this.x = 5;
  this.y = 5;
  this.level = 1;
  this.health = 100;
  this.score = 0;
  this.cX = 0;
  this.cY = 0;

  this.show = function(){
    noStroke();
    c = color('rgb(255,255,255)');
    fill(c);
    square(this.x*25, this.y*25, 25);
  };

}
