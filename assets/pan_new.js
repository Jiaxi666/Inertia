// 摇杆代码 joy_stick.js

cc.Class({
  extends: cc.Component,

  properties: {

    items: {
      default: [],
      type: cc.Node,
    },

    canvas: {
      default: null,
      type: cc.Node,
    },

    stick: {
      type: cc.Node,
      default: null,
    },

    scoreshow: {
      type: cc.Label,
      default: null,
    },

    starshow: {
      type: cc.Label,
      default: null,
    },

    justshow: {
      type: cc.Label,
      default: null,
    },

    block: {
      type: cc.Node,
      default: null,
    },
    floats: [cc.Float],
    time: 0,

    angle_stick_now: 0,
    angle_stick_old: 0,

    delta: 0,

    score: 0,
    star: 3,
    use_degree: 0,
    end_degree: 0,

  },

  // LIFE-CYCLE CALLBACKS:
  // 初始化代码
  onLoad() {

  },


  // 自身旋转+角度计算



  // 影子跟踪启示代码
  start() {
    // this.schedule(this.shadowFollow, 0.12, cc.macro.REPEAT_FOREVER);

    this.dir = cc.v2(0, 0);


    //开始时候获得运动起始的角度
    this.stick.on(cc.Node.EventType.TOUCH_START, function(e) {
      // var start_pos = e.getLocation();
      // var use_pos = this.node.convertToNodeSpaceAR(start_pos);
      // var use_angel = Math.atan2(use_pos.x, use_pos.y);
      // this.use_degree = use_angel * 180 / Math.PI;
      // this.use_degree = use_angel * 180 / Math.PI;
      // // this.use_degree = 180 - this.use_degree ;

      this.end_degree = this.stick.angle;

      // this.starshow.string = this.use_degree;
    }.bind(this), this);



    //主运动函数
    // this.stick.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
    //   var w_pos = e.getLocation();
    //   var now_pos = this.node.convertToNodeSpaceAR(w_pos);
    //   var len = now_pos.mag();
    //   this.dir.x = now_pos.x / len;
    //   this.dir.y = now_pos.y / len;
    //
    //
    //   // this.stick.setPosition(pos);
    //
    //   // Math.atan2(y,x) 计算出来的结果angel是一个弧度值 数学的弧度是逆时针的 而游戏中是顺时针的
    //   var angel = Math.atan2(this.dir.y, this.dir.x);
    //   var degree = angel * 180 / Math.PI;
    //   // degree = 180 - degree ;
    //
    //
    //   // 调整腰杆的角度
    //   this.stick.angle = this.end_degree + degree;
    //   // this.stick.runAction(cc.rotateTo(0, degree));
    //
    // }.bind(this), this);

    //结束时候获得上一次的角度
    // this.stick.on(cc.Node.EventType.TOUCH_END, function(e) {
    //   this.end_degree = this.stick.angle;
    //
    // }.bind(this), this);


    // this.star = 3;
    this.schedule(this.starPlus, 4, 1, 1);

    // this.scoreshow.string = "Score:" + this.score;
  },

  // 用update写影子跟踪
  update() {
    this.canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    // this.angle_stick_now = -this.stick.angle;
    this.floats[this.time] = this.stick.angle;

    // if (this.time >= 100 ) {
    //   this.time = 0;
    // }

    this.time++;

    this.items.forEach((item, i) => {
      item.angle = this.floats[this.time - 7 * i - 5];
    });


  },








  // 挑战自我————————————————————————————————————————————————————————————————

  onTouchStart(e){
    // var start_x = e.getLocationX();
    // var start_y = e.getLocationY();
    // var endend = this.stick.angle;
    console.log("开始");
  },

  onTouchMove(e){
    var start_location = e.getStartLocation();
    var now_location = e.getLocation();
    var delta_location = now_location.sub(start_location);
    var len_new = delta_location.mag();

    var angle_new = Math.atan2(delta_location.y, delta_location.x);
    // console.log(angle_new);
    var degree_new = angle_new * 180 / Math.PI;

    this.items[1].angle = degree_new;
    this.stick.angle = degree_new ;

    // console.log(this.items[1].angle + "this.items[1].angle");
    // console.log(this.stick.angle + "this.stick.angle");
  },

  onTouchEnd(e){
    // console.log("完成");
    // var endend = this.stick.angle;
  },


  // this.canvas.on(cc.Node.EventType.TOUCH_START, function(e) {
  //
  // }.bind(this), this);
  //
  // this.canvas.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
  //
  //
  // }.bind(this), this);
  //
  // this.canvas.on(cc.Node.EventType.TOUCH_END, function(e) {
  //
  // }.bind(this), this);

  // 挑战自我————————————————————————————————————————————————————————————————
  // 挑战自我————————————————————————————————————————————————————————————————
  // 挑战自我————————————————————————————————————————————————————————————————
  // 挑战自我————————————————————————————————————————————————————————————————









  // 影子跟踪
  shadowFollow() {


    // 基础判断角度函数
    // if ((-this.stick.angle-360)<0) {
    //   this.angle_stick = (-this.stick.angle-360) + 360;
    // }
    // else {
    //   this.angle_stick = (-this.stick.angle-360);
    // }
    // this.angle_stick = 0 - this.stick.angle;



    // this.items.forEach((item, i) => {
    //   // item.angle = this.angle_stick;
    //   cc.tween(item)
    //     .to(0.1, { angle : -this.angle_stick} )
    //     .start()
    // });

    this.angle_stick_now = -this.stick.angle;

    this.delta = this.angle_stick_now - this.angle_stick_old;

    if (this.delta < (-160)) {
      this.delta += 360;
    } else if (this.delta > (160)) {
      this.delta -= 360;
    }

    this.angle_stick_old = this.angle_stick_now;

    this.items.forEach((item, i) => {
      item.runAction(cc.rotateBy(0.02 * i, this.delta));
    });


    // // 更新版调整delta
    // if ((this.delta < -180) || (this.delta < -180)) {
    //   cc.console.log("有问题");
    // }
    //
    // this.items.forEach((item, i) => {
    //   this.delta = this.angle_stick_now - (-item.angle)
    //   if (this.delta < (-180)) {
    //     this.delta += 360;
    //     this.scoreshow.string = "摇柄的angle" + this.delta;
    //   } else if (this.delta > (180)) {
    //     this.delta -= 360;
    //     this.scoreshow.string = "摇柄的angle" + this.delta;
    //   }
    //
    //
    //   item.runAction(cc.rotateBy(0.03 * i, this.delta));
    // });


    // 调整角度函数
    // this.items.forEach((v, i) => {
    //   v.runAction(cc.rotateBy(i * 0.02, this.delta));
    // }, )



  },






});
