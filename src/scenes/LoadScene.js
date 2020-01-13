import { CST } from "../CST";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENE.LOAD
        })
    }
    create()
    {
        this.scene.start(CST.SCENE.MENU)
        this.scene.launch();
    }
}