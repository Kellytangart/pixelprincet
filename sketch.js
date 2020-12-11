var princet, princeteye, player1, playereye, flower, player1flip, fairy, fairyeye, dead;
var stage = 1;

function preload() {
  princet = createImg("assets/princessflip1.gif");
  princeteye = createImg("assets/princessflip.gif");
  player1 = createImg("assets/princegif.gif");
  playereye = createImg("assets/princeeyegif.gif");
  fairy = createImg("assets/Fairy.gif");
  fairyeye = createImg("assets/Fairyeyegif.gif");
  player1flip = createImg("assets/Prince1flip.png");
  dead = createImg("assets/dead.png");
  flower= createImg("assets/flower.gif");
}

function setup() {
  createCanvas(700, 500);
  stage = 1;
}

function draw() {
  textStyle(BOLD);
  strokeWeight(5);
textSize(14);
  if (stage == 1) {
    background('pink');
    text("Do you want to save the princet?", 270, 150);
    fairy.position(20, 150, 'relative');
    player1flip.position(970, 480, 'fixed');
      flower.position(620, 600, 'fixed');
    text("yes", 200, 350);
    text("no", 460, 350);
  } else if (stage == 2) {
    background('#7ea4e0');
    text('Choose what road to take', 270, 150);
    text('Yellow Road', 150, 350);
    text('Red Road', 460, 350);
  } else if (stage == 3) {
    background('#99f3f7');
    text('You meet a man in a black robe', 280, 150);
    text('Help him', 200, 350);
    text('Leave him', 460, 350);
  } else if (stage == 4) {
    background('#a2f2a8');
    text('The man takes you to the dark forest', 270, 150);
    text('take the rocky path?', 200, 350);
    text('take the thorny path?', 460, 350);
  } else if (stage == 5) {
    background('#fbffa6');
    text('the thorns are in the way', 270, 150);
    text('throw the potion', 200, 350);
    text('keep and walk', 460, 350);
  } else if (stage == 6) {
    background('#fad7ac');
    text('The thorns cleared and you found the princess!', 250, 150);
  } else if (stage == 7) {
    background('#e0acfa');
    text('princet I have come to save you', 260, 350);
      princet.position(970,480, 'fixed');
    player1.position(320, 480, 'relative');
  } else if (stage == 8) {
    background('#abfca4');
    text('Who told you to save me? *confused look*', 260, 350);
      princeteye.position(970,480, 'fixed');
      player1.position(420, 480, 'relative');
  } else if (stage == 9) {
    background('gray');
    text('the fairy told me you needed help *sparkly eyes*', 260, 350);
      fairyeye.position(440,230, 'fixed');
  } else if (stage == 10) {
    background('#fafaaa');
    text('*wtf face* “........no?', 260, 350);
    princeteye.position(970,480, 'fixed');
    player1.position(420, 480, 'relative');
  } else if (stage == 11) {
    background('#ffd7cf');
    text('Princet walks away from screen', 350, 150);
    princeteye.position(970,480, 'fixed');
    player1.position(420, 480, 'relative');
  } else if (stage == 12) {
    background('#ffd6d4');
    text('The End', 350,150);
  }

  //Dead endstages
  else if (stage == 20) {
    background('red');
    text('the end', 300, 150);

  } else if (stage == 21) {
    background('red');
    text('Oh no! You touched a poisonous frog *dead*', 260, 150);
  } else if (stage == 22) {
    background('red');
    text('you got cursed and get strucked by lighting *dead*', 250, 150);
  } else if (stage == 23) {
    background('red');
    text('You slip and fall off the cliff *dead*', 260, 150);
  } else if (stage == 24) {
    background('red');
    text('You get stung by the poisonous thorns *dead*', 250, 150);
  }
}


function mousePressed() {
  // Stage 1 BUTTONS
  if (stage == 1) {
    if (mouseX > 150 && mouseX < 220 && mouseY > 340 && mouseY < 360) {
      stage = 2;
    } else if (mouseX > 400 && mouseX < 4150 && mouseY > 340 && mouseY < 360) {
      stage = 20;
      fairy.hide();

    }
  }

  // Stage 2 BUTTONS
  else if (stage == 2) {
    if (mouseX > 150 && mouseX < 250 && mouseY > 330 && mouseY < 400) {
      stage = 21;
      dead.position(200,400, 'relative');
      player1flip.hide();
      fairy.hide();
    } else if (mouseX > 400 && mouseX < 550 && mouseY > 340 && mouseY < 360) {
      stage = 3;
    }
  }
  // Stage 3 BUTTONS
  else if (stage == 3) {
    if (mouseX > 150 && mouseX < 250 && mouseY > 330 && mouseY < 400) {
      stage = 4;
    } else if (mouseX > 400 && mouseX < 550 && mouseY > 340 && mouseY < 370) {
      stage = 22;
      fairy.hide();
      dead.position(200,400, 'relative');
      player1flip.hide();
    }
  }
  // Stage 4 BUTTONS
  else if (stage == 4) {
    if (mouseX > 150 && mouseX < 250 && mouseY > 330 && mouseY < 400) {
      stage = 23;
fairy.hide();
dead.position(200,400, 'relative');
player1flip.hide();
    } else if (mouseX > 400 && mouseX < 550 && mouseY > 340 && mouseY < 370) {
      stage = 5;
    }
  }
  // Stage 5 BUTTONS
  else if (stage == 5) {
    if (mouseX > 150 && mouseX < 250 && mouseY > 330 && mouseY < 400) {
      stage = 6;
    } else if (mouseX > 400 && mouseX < 550 && mouseY > 340 && mouseY < 370) {
      stage = 24;
      fairy.hide();
      dead.position(200,400, 'relative');
      player1flip.hide();

    }
  }
  // Stage 6 BUTTONS
  else if (stage == 6) {
    if (mouseX, mouseY) {
      stage = 7;
      player1flip.hide();
      fairy.hide();
    } else if (mouseX > 400 && mouseX < 550 && mouseY > 340 && mouseY < 370) {
      stage = 22;
      dead.position(200,400, 'relative');
      player1flip.hide();
      fairy.hide();
    }
  }
  // Stage 7 BUTTONS
  else if (stage == 7) {
    if (mouseX, mouseY) {
      stage = 8;
      player1flip.hide();
        fairy.hide();
    }
  }
  // Stage 8 BUTTONS
  else if (stage == 8) {
    if (mouseX, mouseY) {
      stage = 9;
      player1flip.hide();
    }
  }
  // Stage 9 BUTTONS
  else if (stage == 9) {
    if (mouseX, mouseY) {
      stage = 10;
      player1flip.hide();
        fairyeye.hide();
    }
  }
  // Stage 10 BUTTONS
  else if (stage == 10) {
    if (mouseX, mouseY) {
      stage = 11;
      player1flip.hide();
        fairyeye.hide();
    }
  }
  else if (stage == 11) {
    if (mouseX, mouseY) {
      stage = 12;
      player1flip.hide();
      player1.hide();
        princeteye.hide();
        fairyeye.hide();
    }
  }
}
