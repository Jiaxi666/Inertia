// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  @property(cc.Integer)
  time: cc.Integer = 0;

  @property(cc.Integer)
  score: cc.Integer = 0;

  @property(cc.Integer)
  star: cc.Integer = 0;

  @property([cc.Sprite)
  items: cc.Sprite[] = [];

  @property([cc.Sprite)
  stars: cc.Sprite[] = [];

  @property([cc.Node])
  circle: cc.Node = null;

  @property([cc.Label])
  scoreshow: cc.Label ;

  @property([cc.Label])
  starshow: cc.Label;

  // @property([cc.Label])
  // justshow: cc.Label;

  rot: 0,
  range: 0,

  // LIFE-CYCLE CALLBACKS:

  start(){
    this.star = 3;
    if (this.star <= 4) {
      this.schedule(this.starPlus, 6, 1, 4);
    }


  }

  onLoad() {
  }

  starPlus() {
    this.items[(this.star)].node.active = true;
    this.star++;
    this.starshow.string = "Star:" + this.star;
    console.log(this.star + "star");
    this.stars[(this.star) - 1].node.active = true;
  },

  update(dt) {

    // 更新版时间判断，调试中
    if (this.time < 120) {
      this.circle.setScale(cc.v2((200 - this.time) / 200, (200 - this.time) / 200));
      this.circle.opacity = 80 + 1.4 * this.time;
      this.circle.getComponent(cc.Sprite).fillRange = (this.angle);
      this.circle.angle = this.rot * 360;

      this.time += 1;


    }
    else if (this.time == 120) {

      // 旋转测试过程-----------------------------------------
      for (var i = 0; i < (this.star ); i++) {
        if (((this.items[i].node.angle + 360) >= this.circle.angle) && ((this.items[i].node.angle + 360) <= (this.circle.angle + (this.circle.getComponent(cc.Sprite).fillRange * 360)))) {
          this.score++;
        }
      }


      this.scoreshow.string = (this.score);
      // 分数显示测试------------------------
      console.log("point" + (this.items[0].node.angle + 360));


      console.log("A" + this.circle.angle);
      console.log("B" + (this.circle.angle + (this.circle.getComponent(cc.Sprite).fillRange * 360)));




      // this.justshow.string = this.circle.angle - (this.circle.getComponent(cc.Sprite).fillRange * 360);

      this.rot = Math.random();
      this.angle = Math.random() * 0.23 + 0.03;
      // this.label.string = Math.random(0.2, 0.6);
      // this.label.string = Math.randomRangeInt(0,240);
      this.circle.setScale(cc.v2(1.2, 1.2));
      this.time = 0;
    }
    // else {
    //   this.rot = Math.random();
    //   this.angle = Math.random() * 0.25 + 0.05;
    //   this.label.string = Math.random(0.2, 0.6);
    //   // this.label.string = Math.randomRangeInt(0,240);
    //   this.circle.setScale(cc.v2(1.2, 1.2));
    //   this.time = 0;
    // }



    // 原来的简单时间判断
    // if (this.time <= 120) {
    //   this.circle.setScale(cc.v2((200 - this.time) / 100, (200 - this.time) / 100));
    //   this.circle.opacity = 80 + 1.4 * this.time;
    //   this.circle.getComponent(cc.Sprite).fillRange = (this.range);
    //   this.circle.angle = -this.rot * 360;
    //
    //   this.time += 1;
    // }
    //
    // else {
    //   this.rot = Math.random();
    //   this.range = Math.random() * 0.25 + 0.05;
    //   // this.scoreshow.string = Math.random();
    //   // this.scoreshow.setString.randomRangeInt(0,240);
    //   // this.circle.setScale(cc.v2(1.2, 1.2));
    //   // cc.log("angle是" + this.circle.angle);
    //   // cc.log("angle减fillrange是" + (this.circle.angle - (this.circle.getComponent(cc.Sprite).fillRange * 360)));
    //   cc.log("angle是" + (-this.rot * 360));
    //   cc.log("angle减fillrange是" + ( (-this.rot * 360) + (this.range) * 360  ));
    //   cc.log("第2的角度是" + this.items[1].node.angle);
    //   // for (let index = 0; index < 5; index++) {
    //   //   cc.log("第" + index + "的角度是" + this.items[index].angle);
    //   //
    //   // }
    //   this.time = 0;
    // }



  }
  // else {
  //
  //   this.rot = Math.random();
  //   this.angle = Math.random()*0.25+0.05;
  //   this.label.string = Math.random(0.2,0.6);
  //   // this.label.string = Math.randomRangeInt(0,240);
  //   this.circle.setScale(cc.v2(1.2, 1.2));
  //   this.time = 0;
  //
  // }


}
