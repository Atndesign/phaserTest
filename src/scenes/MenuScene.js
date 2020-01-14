import { CST } from "../CST";

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENE.MENU
        })
    }
   
    create()
    {
        this.add.image(0,0, "background").setOrigin(0)
        this.add.image(this.game.renderer.width / 2,50, "title")
        this.add.image(this.game.renderer.width / 1.5, this.game.renderer.height * .80, "settings")
        let playBtn = this.add.image(this.game.renderer.width/ 3, this.game.renderer.height * .80, "play")

        playBtn.setInteractive();
        playBtn.on('pointerover',()=>{
            this.scene.start(CST.SCENE.PLAY)
        })
    }
}