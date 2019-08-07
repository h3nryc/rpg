function FightHandler() {
  this.fight = false;
  this.mobPlaces = [];
  this.cMobH = 0;
  this.cMobS = 0;
  this.cMobD = 0;
  this.coolDown = 0;

  this.battle = function(mob){
    this.fight = true;
    this.cMobH = mob[0];
    this.cMobS = mob[1];
    this.cMobD = mob[2];
    $('.contr').show();
    $( ".mob-health-inner" ).css("width", this.cMobH+'%');
  }

  this.endFight = function(){
    this.fight = false;
    this.cMobH = 0;
    this.cMobS = 0;
    this.cMobD = 0;
    $('.contr').hide();
  }

  this.playerMove = function(move){
    if (this.fight) {
      if (Math.sign(player.attr[1]-this.cMobS) != -1) {
        var pStat = playerAttack(move);
        if (pStat != true) {
          this.cMobH = this.cMobH - pStat;
          if(this.cMobH <= 0){this.endFight();alert('You Win!')}
          $( ".mob-health-inner" ).css("width", this.cMobH+'%');
          mobAi(this.cMobD)
        }else{
          var rand = Math.floor(Math.random() * 5) + 1
          if (rand == 1) {
            alert("The opponent hurt itself in confusion!")
            this.cMobH = this.cMobH - 15;
            if(this.cMobH <= 0){this.endFight();alert('You Win!')}
            $( ".mob-health-inner" ).css("width", this.cMobH+'%');
          }
        }
      }else{
        mobAi(this.cMobD)
        var pStat = playerAttack(move);
        if (pStat != true) {
          this.cMobH = this.cMobH - pStat
          if(this.cMobH <= 0){this.endFight();alert('You Win!')}
          $( ".mob-health-inner" ).css("width", this.cMobH+'%');
        }
      }
    }
  }
}

function mobAi(difficulty) {
  console.log(2);
  var max = 11 - difficulty;
  var rand = Math.floor(Math.random() * 11) + 1
  if (rand == 1) {
    player.updateStat(0,false,10+3*difficulty)
  }else{
    var unluckyRand = Math.floor(Math.random() * 11) + 1
    player.updateStat(0,false,5)
  }
}

function playerAttack(move) {

  switch(move) {
    case 0:
    var rand = Math.floor(Math.random() * 2) + 1;
    console.log(rand);
    if (rand == 1) {
      return (player.attr[2]/5) +20;
    }else{
      return 0;
    }
    break;
    case 1:
    var rand = Math.floor(Math.random() * 2) + 1;
    if (rand == 1) {
      return (player.attr[2]/13) +15;
    }else{
      return 0;
    }
    break;
    case 2:
    return 20;
    break;
    case 3:
    return true;
    break;
    case 4:
    //steal health
    console.log(Date.now());
    return 20;
    break;
    case 5:
    break;
  default:
  }

}
