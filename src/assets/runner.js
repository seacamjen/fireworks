function init() {
  var stage = new createjs.Stage("demoCanvas");

  var character = new Image();
  character.src = "assets/catboy.png";
  var bitmap = new createjs.Bitmap(character);
  stage.addChild(bitmap);
  stage.update();

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addEventListener("tick", stage);
}
