import {LoadScene} from "./scenes/LoadScene"
import {MenuScene} from "./scenes/MenuScene"
import {PlayScene} from "./scenes/PlayScene"

export let game = new Phaser.Game({
    width: 400,
    height: 600,
    scene: [
        LoadScene, MenuScene, PlayScene
    ],
    render: {
        pixelArt: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        },
    }
})