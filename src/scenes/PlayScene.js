import { CST } from "../CST";
import { InputManagerBind } from "../../helpers/inputManager";

export class PlayScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENE.PLAY,
        })
        this.lol = 40;
        console.log(this.lol)
    }
    preload()
    {
        this.map = this.make.tilemap({ key: 'map', tileWidth: 16, tileHeight: 16 });
        this.tileset = map.addTilesetImage('tiles_red');
        this.layer = map.createDynamicLayer(0, tileset, 0, 0);
        this.layer.setScale(2);
        this.textures.spritesheet = this.load.spritesheet("reaper", "/assets/img/game/player.png" ,{frameWidth: 16, frameHeight: 16})
        this.textures.spritesheet = this.load.spritesheet("boomSlime", "/assets/img/game/enemies/slimes/boomSlime.png" ,{frameWidth: 16, frameHeight: 16})
        this.keyboard = this.input.keyboard.addKeys("Z,Q,S,D");
        this.InputManagerBind = new InputManagerBind(this,this.keyboard)
    }
    create()
    {
        this.reaper = new Player(this, 250, 50, "reaper")
        this.boomSlime = new Slime(this, 10, 50, "boomSlime", this.reaper, 40)
        this.physicsGroup = this.physics.add.group({
            // Initial angular speed of 60 degrees per second.
            // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
            angularDrag: 5,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            dragX: 60,
            dragY: 60,
        });
        this.physicsGroup.add(this.reaper)
        
        
    }
    update()
    {
        this.InputManagerBind.handleUpdate(this.reaper)
        
    }
}

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x = 0, y = 0, texture = 'dude') {
      super(scene, x, y, texture)
      this.velocity = {
        x: 0,
        y: 0,
      };
      scene.add.existing(this)
      scene.physics.add.existing(this)
      scene.events.on('update', this.update, this)
    }
    create()
    {
        this.anims.create({
            key: "walk",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers(texture, { start: 0, end: 0 }),
        });
        this.reaper = this.add.sprite(100,100,texture)
    }
    update()
    {
        
    }
    updatePlayerPos(velocityX, velocityY){
        this.velocity.x = this.velocity.x + velocityX;
        this.velocity.y = this.velocity.y + velocityY;
        this.setVelocity(this.velocity.x, this.velocity.y);
    }
}

class Slime extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x = 0, y = 0, texture = 'boomSlime', target, speed) {
      super(scene, x, y, texture, target, speed)
        this.target = target
        this.speed = speed;
        scene.add.existing(this)
        scene.physics.add.existing(this)
        scene.events.on('update', this.update, this)
        }
    
    create()
    {
        this.anims.create({
            key: "walk",
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers(texture, { start: 0, end: 0 }),
        });
        this.slime = this.add.sprite(100,100,texture)
    }
    update()
    {
       
    }
}