scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    game.over(true)
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    effects.smiles.startScreenEffect(1000)
    tiles.setTilemap(tilemap`niveau4`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTilemap(tilemap`niveau2`)
    playeur.setPosition(25, 20)
    game.splash("Les bouton orange peuvent débloquer certain passages")
    info.startCountdown(40)
})
let playeur: Sprite = null
tiles.setTilemap(tilemap`niveau1`)
playeur = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . f f 5 5 5 5 5 f . . . 
    . . . . f f 5 1 1 1 5 5 5 f . . 
    . . . . f 5 5 1 f f 5 5 4 f . . 
    . . . . f 5 5 1 f f 5 5 4 4 f . 
    . f f f 5 5 5 5 5 5 4 4 4 4 4 f 
    f 1 f f f f 5 5 5 4 4 4 4 4 f . 
    f f f 5 5 5 f 5 5 5 5 5 5 f . . 
    f 1 f 5 5 5 5 f 5 5 5 5 5 5 f . 
    f f 5 f 5 5 5 f 5 5 5 5 5 5 f . 
    . f 5 5 f f f 5 5 5 5 5 5 d f . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
playeur.setPosition(25, 20)
scene.cameraFollowSprite(playeur)
controller.moveSprite(playeur)
playeur.setVelocity(100, 100)
info.startCountdown(20)
