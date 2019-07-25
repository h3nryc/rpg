var player;

function preload() {
//grass = loadImage('./assets/grass.png');
ocean = loadImage('./assets/ocean.jpg');
dirt = loadImage('./assets/dirt.jpg');
img = loadImage('./assets/tilesheet.png');
}

function setup() {
  createCanvas(600, 600);

  player = new Player();
  playerLoc = [6,6];

   map = [
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'goal'},{type: 'dirt', canStep: true}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'goal'},{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}]
  ];

}

function draw() {
  for (var x = 0; x < 24; x++) {
    for (var y = 0; y < 24; y++) {
      cSquare = map[x][y]
      let c;
      noStroke();
      switch(cSquare.type) {
        case 'ocean':
        image(ocean, x*25, y*25, 25,25);
          break;
        case 'grass':
          //image(grass, x*25, y*25, 25,25);
          image(img,[sx=x*25],[sy=y*25],[sWidth=25],[sHeight=25],[dx=0],[dy=32],[30],[30])
        break;
      case 'dirt':
      image(dirt, x*25, y*25, 25,25);
        break;
      case 'goal':
      c = color('rgb(241, 196, 15)')
      fill(c);
      square(x*25, y*25, 25);
      default:
      }
    }
  }

  player.show(playerLoc[0],playerLoc[1]);


noLoop();
}



function keyPressed() {
  if (keyCode === 87) {
    if(map[playerLoc[0]][playerLoc[1]-1].canStep == true || map[playerLoc[0]][playerLoc[1]-1].canStep == undefined){
      playerLoc[1] = playerLoc[1] - 1;
      draw();
    }
  } else if (keyCode === 65) {
    if(map[playerLoc[0]-1][playerLoc[1]].canStep == true || map[playerLoc[0]-1][playerLoc[1]].canStep == undefined){
      playerLoc[0] = playerLoc[0] - 1;
      draw();
    }
  } else if (keyCode === 83) {
      if(map[playerLoc[0]][playerLoc[1]+1].canStep == true || map[playerLoc[0]][playerLoc[1]+1].canStep == undefined){
        playerLoc[1] = playerLoc[1] + 1;
        draw();
      }
    }else if (keyCode === 68) {
      if(map[playerLoc[0]+1][playerLoc[1]].canStep == true || map[playerLoc[0]+1][playerLoc[1]].canStep == undefined){
        playerLoc[0] = playerLoc[0] + 1;
        draw();
      }
  }
}
