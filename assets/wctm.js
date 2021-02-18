// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        stick:{
            type: cc.Node,
            default: null
        },
        max_r : 80
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        this.start_pos = cc.v2(0, 0);
        this.stick.setPosition(this.start_pos);

        this.dir = cc.v2(0, 0);

        this.stick.on(cc.Node.EventType.TOUCH_START, function(){

        }.bind(this), this);

        this.stick.on(cc.Node.EventType.TOUCH_MOVE, function(e){
            var w_pos = e.getLocation();
            var pos = this.node.convertToNodeSpaceAR(w_pos);
            var len = pos.mag();

            /* 好处
            归一化，一个方向，只有一个值;
            this.dir.x = cos(r);
            this.dir.y = sin(r);
            // -1, 1
            */
            this.dir.x = pos.x / len;
            this.dir.y = pos.y / len;



            if(len > this.max_r){
                // 三角函数或者比例关系算坐标
                pos.x = pos.x * this.max_r / len;
                pos.y = pos.y * this.max_r / len;
            }
            this.stick.setPosition(pos);

        }.bind(this), this);

        this.stick.on(cc.Node.EventType.TOUCH_END, function(){
            this.dir = cc.v2(0, 0);
            this.stick.setPosition(this.start_pos);
        }.bind(this), this);

        this.stick.on(cc.Node.EventType.TOUCH_CANCEL, function(){
            this.dir = cc.v2(0, 0);
            this.stick.setPosition(this.start_pos);
        }.bind(this), this);
    },

    // update (dt) {},
});
