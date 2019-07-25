

function setup() {
  createCanvas(600, 600);
  playerLoc = [6,6];

   map = [
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'}],
    [{type: 'ocean', canStep: false}, {type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'},{type: 'dirt'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'}],
    [{type: 'ocean', canStep: false}, {type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'grass'},{type: 'goal'}]
  ];

}

function draw() {
  for (var x = 0; x < 12; x++) {
    for (var y = 0; y < 12; y++) {
      cSquare = map[x][y]
      let c;
      noStroke();
      switch(cSquare.type) {
        case 'ocean':
        c = color('rgb(0,0,255)');
          break;
        case 'grass':
          c = color('rgb(50,205,50)');
          break;
      case 'dirt':
      c = color('rgb(160,82,45)')
        break;
      case 'goal':
      c = color('rgb(241, 196, 15)')
      default:
      }
      fill(c);
      square(x*50, y*50, 50);
    }
  }

  noStroke();
  c = color('rgb(255,255,255)');
  fill(c);
  square(playerLoc[0]*50, playerLoc[1]*50, 50);


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
