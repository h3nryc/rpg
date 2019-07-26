function Player(x,y) {
  this.x = 6;
  this.y = 6;
  this.level = 1;
  this.health = 100;
  this.score = 0;

  this.show = function(x,y){
    noStroke();
    c = color('rgb(255,255,255)');
    fill(c);
    square(this.x*25, this.y*25, 25);
  };

}
