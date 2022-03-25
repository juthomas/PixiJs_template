// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

// Create the sprite and add it to the stage

function createSquare(position) {
  let square = new PIXI.Sprite(PIXI.Texture.WHITE);
  square.position.set(position.x, position.y);
  square.width = 10;
  square.height = 10;
  square.tint = '0x00FF00';
  return (square);
}

let square = createSquare({x:10, y:10});
let squareList = [];

for (let i = 0; i < 10; i++)
{
  squareList.push(createSquare({x:10, y:10}));
}
// let sprite = PIXI.Sprite.from("/public/sample.png");
// app.stage.addChild(sprite);
app.stage.addChild(square);

setInterval(() => {}, 200);

// Add a ticker callback to move the sprite back and forth
// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });
