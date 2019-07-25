function Player(x,y) {

  this.level = 1;
  this.health = 100;
  this.score = 0;

  this.show = function(x,y){
    noStroke();
    c = color('rgb(255,255,255)');
    fill(c);
    square(x*25, y*25, 25);
  }
}
