import {LoadScene} from "./scenes/LoadScene"
import {MenuScene} from "./scenes/MenuScene"

let game = new Phaser.Game({
    width: 400,
    height: 600,
    scene: [
        LoadScene, MenuScene
    ]
})