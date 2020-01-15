
const DIRECTION_VELOCITY = 10;

export class InputManagerBind extends Phaser.Input.InputManager {
    constructor(game,keyboard){
        super(game,keyboard)
        this.keyboard = keyboard
        this.keys = [{
            name: "Z", 
            value: keyboard.Z,
            velocityX: 0,
            velocityY: -DIRECTION_VELOCITY,
        },
        {
            name: "S", 
            value: keyboard.S,
            velocityX: 0,
            velocityY: DIRECTION_VELOCITY,
        },
        {
            name: "D", 
            value: keyboard.D,
            velocityX: DIRECTION_VELOCITY,
            velocityY: 0,
        },
        {
            name: "Q", 
            value: keyboard.Q,
            velocityX: -DIRECTION_VELOCITY,
            velocityY: 0,
        }]
    }
    handleUpdate(player){
        Object.keys(this.keyboard).forEach(key => {
            if(this.keyboard[key].isDown){
                this.currentKey = this.keys.find(({ name }) => name === key);
                player.updatePlayerPos(this.currentKey.velocityX, this.currentKey.velocityY);
            }
        })
    }
    getKeys(){
        return this.keys
    }
}