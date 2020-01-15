import { CST } from "../CST";
import { InputManagerBind } from "../../helpers/inputManager";
import { game } from "../main"

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
        this.load.image("terrain", "./assets/tilesetMap.png");
        this.load.tilemapTiledJSON("map", "./assets/map.json");

        this.textures.spritesheet = this.load.spritesheet("reaper", "/assets/img/game/player.png" ,{frameWidth: 16, frameHeight: 16})
        this.textures.spritesheet = this.load.spritesheet("boomSlime", "/assets/img/game/enemies/slimes/boomSlime.png" ,{frameWidth: 16, frameHeight: 16})
        this.keyboard = this.input.keyboard.addKeys("Z,Q,S,D");
        this.InputManagerBind = new InputManagerBind(this,this.keyboard)
    }
    create()
    {
        this.reaper = new Player(this, 250, 300, "reaper")
        this.boomSlime = new Slime(this, 10, 50, "boomSlime", this.reaper, 40)
        this.physicsGroup = this.physics.add.group({
            // Initial angular speed of 60 degrees per second.
            // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
            angularDrag: 5,
            collideWorldBounds: true,
            dragX: 150,
            dragY: 60,
        });
        this.physicsGroup.add(this.reaper)
        // Map from tiled
        this.map = this.add.tilemap("map");
        this.terrain = this.map.addTilesetImage("tilesetMap", "terrain")
        this.layer = this.map.createStaticLayer("terrainMaybe", [this.terrain], 0,0).setDepth(-1)
        this.physics.add.collider(this.reaper, this.layer)
        this.layer.setCollisionByProperty({collides:true})
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