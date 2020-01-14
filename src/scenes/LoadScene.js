import { CST } from "../CST";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENE.LOAD
        })
    }
    preload()
    {
        this.load.image("background","./assets/img/menu/background.png");
        this.load.image("play","./assets/img/menu/play.png");
        this.load.image("settings","./assets/img/menu/settings.png");
        this.load.image("title","./assets/img/menu/title.png");

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })

        this.load.on('progress', (percent)=>{
            loadingBar.fillRect(0,this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        })
    }
    create()
    {
        this.scene.start(CST.SCENE.MENU)
        this.scene.launch();
    }
}