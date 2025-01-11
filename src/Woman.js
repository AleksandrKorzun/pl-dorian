import { SCALES } from "./constants/Constants";

export default class Woman extends Phaser.GameObjects.Container {
  constructor(scene, count) {
    super(scene, 0, 0);
    this.tweens = scene.tweens;
    this.addWoman();
    this.initAssets();
  }
  initAssets() {
    this.addProperties(["pos", "scale"])
      .setDepth(7)
      .setCustomAlign("Bottom")
      .setCustomScale(...SCALES.woman)
      .setCustomPosition(-1700, 100, -1700, 50);
    this.tweens.add({
      targets: this,
      px: 0,
      lx: -300,
      duration: 500,
      ease: "Sine.inOut",
    });
  }
  addWoman() {
    this.woman = this.scene.add.image(0, 0, "gg").setDepth(7).setOrigin(0.5, 1);

    this.add([this.woman]);
    this._sort();
  }
}
