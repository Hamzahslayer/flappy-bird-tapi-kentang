
let bgcolor=100



let birddy;
let pipes = []
let play;
function setup() {

  play = 'true'
  createCanvas(windowWidth, windowHeight, WEBGL);
  birddy = new bird(-150, 1)
  pipee = new pipe(50, [255, 255, 255])

  smooth()//jangan macem macem ganti source kode nya lu
}

function draw() {
  
  if (frameCount % 100 == 0) {
    pipes.push(new pipe(50, [255, 255, 255]))
  }
  if (play == 'true') {
    background(bgcolor);
    pointLight(255, 255, 255, 0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0))
    pointLight(255, 255, 255, 1000, 0, 0)
    birddy.display()
    birddy.move()

    for (let i = 0; i < pipes.length; i++) {
      pipes[i].display()
      pipes[i].move()
      birddy.collide(pipes[i])
      if (pipes[i].x < -width / 2 - pipes[i].w) {

      }
    }
  }
  if (play == 'false') {
    background(bgcolor)

    for (let i = 0; i < pipes.length; i++) {
      pipes[i].display()
      birddy.display()
      if (mouseIsPressed || keyIsPressed) {
        play = 'true'
        pipes=[]
        birddy.y=-20
      }
    }
  }
}
