import { CST } from "../CST";

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENE.MENU
        })
    }
    create()
    {
        this.text = this.add.text (0,0,"Hello I'm a menu 2")
    }
}