var player;

function preload() {
  ocean = loadImage('./assets/ocean.jpg');
  dirt = loadImage('./assets/dirt.jpg');
  img = loadImage('./assets/tilesheet.png');
}

function setup() {
  createCanvas(250, 250);
  player = new Player();
  mapGen = new MapGen();

}

function draw() {
  map = mapGen.createLevel();
  for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 10; y++) {
      cSquare = map[x+player.cX][y+player.cY]
      let c;
      noStroke();
      switch(cSquare.type) {
        case 'ocean':
      //  image(ocean, x*25, y*25, 25,25);
      image(img,[sx=x*25],[sy=y*25],[sWidth=25],[sHeight=25],[dx=64],[dy=352],[30],[30])
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
      case undefined:
      console.log(1);
      c = color('rgb(0, 0, 0)');
      fill(c)
      break;
      default:
      }
    }
  }
  player.show();

noLoop();
}



function keyPressed() {
  if (keyCode === 87 || keyCode === 38) {
    if(map[player.x][player.y-1].canStep == true || map[player.x][player.y-1].canStep == undefined){
      if (player.cY-1<= 0) {
        player.cY = 0;
      }else {
        player.cY = player.cY - 1;
      }
      draw();
    }
  } else if (keyCode === 65 || keyCode == 37) {
    if(map[player.x-1][player.y].canStep == true || map[player.x-1][player.y].canStep == undefined){
      if (player.cX-1<= 0) {
        player.cX = 0;
      }else {
        player.cX = player.cX - 1;
      }
      draw();
    }
  } else if (keyCode === 83 || keyCode === 40) {
      if(map[player.x][player.y+1].canStep == true || map[player.x][player.y+1].canStep == undefined){
        if (player.cY+1 >= 14) {
          player.cY = 14;
        }else {
          player.cY = player.cY + 1;
        }
        draw();
      }
    }else if (keyCode === 68 || keyCode === 39) {
      if(map[player.x+1][player.y].canStep == true || map[player.x+1][player.y].canStep == undefined){
        if (player.cX+1 >= 14) {
          player.cX = 14;
        }else {
          player.cX = player.cX + 1;
        }
        draw();
      }
  }
}
