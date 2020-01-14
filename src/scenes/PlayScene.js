import { CST } from "../CST";

export class PlayScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENE.PLAY,
            
        })
        this.speed = 40;
    }
    preload()
    {
        
        this.textures.spritesheet = this.load.spritesheet("reaper", "/assets/img/game/player.png" ,{frameWidth: 16, frameHeight: 16})
        this.textures.spritesheet = this.load.spritesheet("boomSlime", "/assets/img/game/enemies/slimes/boomSlime.png" ,{frameWidth: 16, frameHeight: 16})
    }
    create()
    {
        this.anims.create({
            key: "walk",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('reaper', { start: 0, end: 0 }),
        });
        this.reaper = this.physics.add.sprite(100,100,"reaper")
        // this.boomSlime = this.physics.add.sprite(100,100,"boomSlime")
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
    }
    update()
    {
            if(this.keyboard.S.isDown === true){
                this.reaper.setVelocity(0,this.speed)
            }
            else if(this.keyboard.W.isDown === true){
                this.reaper.setVelocity(0,-this.speed)
            }
            else if(this.keyboard.A.isDown === true){
                this.reaper.setVelocity(-this.speed,0)
            }
            else if(this.keyboard.D.isDown === true){
                this.reaper.setVelocity(this.speed,0)
            }
            else{
                this.reaper.setVelocity(0,0)
            }
    }
}