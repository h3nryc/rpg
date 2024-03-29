var player;

function preload() {
  ocean = loadImage('./assets/ocean.jpg');
  dirt = loadImage('./assets/dirt.jpg');
  img = loadImage('./assets/tilesheet.png');
  hpPot = loadImage('./assets/sprites/UNUSED/potions/potion_puce.png')
  spdPot = loadImage('./assets/sprites/UNUSED/potions/potion_sky_blue.png')
  coinPile = loadImage('./assets/gold_pile.png')
  player = loadImage('./assets/sprites/dc-mon/human.png')
  slime = loadImage('./assets/sprites/dc-mon/azure_jelly.png')
  witch = loadImage('./assets/sprites/dc-mon/wizard.png')
  pit = loadImage('./assets/sprites/dc-dngn/dngn_unseen.png')
  if (localStorage.getItem('r') == null){
    localStorage.setItem('r', '255');
  }
  if (localStorage.getItem('g') == null){
    localStorage.setItem('g', '255');
  }
  if (localStorage.getItem('b') == null){
    localStorage.setItem('b', '255');
  }
}

function setup() {
  var cnv = createCanvas(250, 250);
  cnv.parent('parent');
  player = new Player();
  mapGen = new MapGen();
  entityHandler = new EntityHandler();
  classHandler = new Classes();
  inventory = new Inventory();
  fightHandler = new FightHandler();

  if (localStorage.getItem('playerStat') == null) {
    var item = JSON.stringify([100,50,50,50,50,0])
    localStorage.setItem('playerStat', item);
    player.updateSavedStats();
  }else{
    player.updateSavedStats();
  }

}

function draw() {
  map = mapGen.createLevel();
  player.drawStats();
  for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 10; y++) {

      var cSquare = map[x+player.cX][y+player.cY];
      var entityInfo = entityHandler.checkPlacement(x+player.cX,y+player.cY);

      let c;
      noStroke();
      switch(cSquare.type) {
        case 'ocean':
       image(ocean, x*25, y*25, 25,25);
      //image(pit, [sx=x*25],[sy=y*25],[sWidth=25],[sHeight=25],[dx=64],[dy=352],[30],[30])
          break;
        case 'grass':
          //image(grass, x*25, y*25, 25,25);
          image(img,[sx=x*25],[sy=y*25],[sWidth=25],[sHeight=25],[dx=0],[dy=32],[30],[30])
      break;
      case 'dirt':
      image(dirt, x*25, y*25, 25,25);
        break;
      case 'goal':
      c = color('rgb(241, 196, 15)');
      fill(c);
      square(x*25, y*25, 25);
      case 'wall':
      c = color('rgb(0, 0, 0)');
      fill(c);
      square(x*25, y*25, 25);
      default:
      }

      if (entityInfo[0]) {
        if (entityInfo[1] == 0) {
          // noStroke();
          // entity = color('rgb(255,0,0)');
          // fill(entity);
          image(hpPot, x*25+5, y*25+5, 15);
        }else if(entityInfo[1] == 1){
          // noStroke();
          // entity = color('rgb(0,0,255)');
          // fill(entity);
          image(spdPot, x*25+5, y*25+5, 15);
        }else if(entityInfo[1] == 2){
          // noStroke();
          // entity = color('rgb(255,255,51)');
          // fill(entity);
          image(coinPile, x*25+5, y*25+5, 15);
        }
        if (entityInfo[1] == 100){
          var mobX = entityHandler.places[entityInfo[2]][0];
          var mobY = entityHandler.places[entityInfo[2]][1];
          if (player.x <= mobX) {
            if (map[mobX-1][mobY].canStep == false) {

            }else{
              entityHandler.places[entityInfo[2]][0] = entityHandler.places[entityInfo[2]][0] - 1;
            }
            // noStroke();
            // entity = color('rgb(0,255,0)')
            // fill(entity);
            image(slime, x*25+5, y*25+5, 15)
          }
          if (player.x >= mobX) {

            if (map[mobX+1][mobY].canStep == false) {
              console.log(1);
            }else{
              entityHandler.places[entityInfo[2]][0] = entityHandler.places[entityInfo[2]][0] + 1;
            }
          }

        }
        if (entityInfo[1] == 101){
          console.log(1);
          var mobX = entityHandler.places[entityInfo[2]][0];
          var mobY = entityHandler.places[entityInfo[2]][1];
          if (player.x <= mobX) {
            if (map[mobX-1][mobY].canStep == false) {
              console.log(1);
            }else{
              entityHandler.places[entityInfo[2]][0] = entityHandler.places[entityInfo[2]][0] - 1;
            }
            // noStroke();
            // entity = color('rgb(255,0,255)')
            // fill(entity);
            image(witch, x*25+5, y*25+5, 15)
          }
          if (player.x >= mobX) {

            if (map[mobX+1][mobY].canStep == false) {
              console.log(1);
            }else{
              entityHandler.places[entityInfo[2]][0] = entityHandler.places[entityInfo[2]][0] + 1;
            }
          }

        }
      }

    }
  }
  player.show();

noLoop();
}



function keyPressed() {
if (fightHandler.fight == false) {
  if (keyCode === 87 || keyCode === 38) {
    if(map[player.x][player.y-1].canStep == true || map[player.x][player.y-1].canStep == undefined){
      var entityInfo = entityHandler.checkPlacement(player.x,player.y-1);
      if(entityInfo[0]){
        entityHandler.pickUp(player.x,player.y-1,entityInfo[1])
      }
      if (player.cY-1<= 0) {
        player.cY = 0;
      }else {
        player.cY = player.cY - 1;
      }
      draw();
    }
  } else if (keyCode === 65 || keyCode == 37) {
    if(map[player.x-1][player.y].canStep == true || map[player.x-1][player.y].canStep == undefined){
      var entityInfo = entityHandler.checkPlacement(player.x-1,player.y);
      if(entityInfo[0]){
        entityHandler.pickUp(player.x-1,player.y,entityInfo[1])
      }
      if (player.cX-1<= 0) {
        player.cX = 0;
      }else {
        player.cX = player.cX - 1;
      }
      draw();
    }
  } else if (keyCode === 83 || keyCode === 40) {
      if(map[player.x][player.y+1].canStep == true || map[player.x][player.y+1].canStep == undefined){
        var entityInfo = entityHandler.checkPlacement(player.x,player.y+1);
        if(entityInfo[0]){
          entityHandler.pickUp(player.x,player.y+1,entityInfo[1])
        }
        if (player.cY+1 >= 30) {
          player.cY = 30;
        }else {
          player.cY = player.cY + 1;
        }
        draw();
      }
    }else if (keyCode === 68 || keyCode === 39) {
      if(map[player.x+1][player.y].canStep == true || map[player.x+1][player.y].canStep == undefined){
        var entityInfo = entityHandler.checkPlacement(player.x+1,player.y);
        if(entityInfo[0]){
          entityHandler.pickUp(player.x+1,player.y,entityInfo[1])
        }
        if (player.cX+1 >= 30) {
          player.cX = 30;
        }else {
          player.cX = player.cX + 1;
        }
        draw();
      }
    }
}
try {
  if (49 <= keyCode <= 57) {
    var invenSlot = keyCode - 49;
    inventory.use(invenSlot);
  }
} catch (e) {

}

}
