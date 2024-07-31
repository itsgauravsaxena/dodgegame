input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let obstacle: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(5000)
    obstacle = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        obstacle.change(LedSpriteProperty.Y, 1)
    }
    if (player.isTouching(obstacle)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    obstacle.delete()
})
