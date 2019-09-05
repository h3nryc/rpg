function Classes() {
  this.h = 100;

  //Classes
  this.warrior = [100,70,60,30,25]
  this.mage = [100,60,25,80,75]
  this.speedster = [100,95,70,45,60]
  this.heavy = [100,30,90,30,90]
  this.howse = [100,100,100,100,100]

  this.changeClass = function(chosen){
    var newAtrr = this[chosen]
    for (var i = 0; i < player.attr.length; i++) {
      player.attr[i] = newAtrr[i];
    }
    player.drawStats();
  }

}
