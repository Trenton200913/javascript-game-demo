controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 400, 400)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
for (let i = 10; i < 5; i++) {
    
}
music.ringTone(Note.C)