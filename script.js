const canvas = document.getElementById('can')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = (canvas.width = 600)
const CANVAS_HEIGHT = (canvas.height = 600)

const playerImg = new Image()
playerImg.src = 'shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523
let frameX = 0
let frameY = 0
// 游戏帧
let gameFrame = 0
// 动画速度
let speed = 5

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // ctx.fillRect(0, 50, 50, 50)
  ctx.drawImage(
    playerImg,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  )
  // 速度控制
  if (gameFrame % speed === 0) {
    if (frameX < 6) frameX++
    else frameX = 0
  }
  gameFrame++
  requestAnimationFrame(animate)
}

animate()
