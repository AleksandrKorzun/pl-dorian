import ParentScene from "@holywater-tech/ads-builder/framework/components/Scene";
import Background from "@holywater-tech/ads-builder/framework/components/ui/Background";
// import Header from "./Header";
// import Keyboard from "./Shelf";
// import Word from "./Word";
// import { EVENTS, SCALES, WORD } from "./constants/Constants";
// import { Modal } from "./Modal";

// import Buttons from "./Buttons";
// import Title from "./Title";
// import Utils from "@holywater-tech/ads-builder/framework/Utils";
// import { Shelfs } from "./Shelfs";
import Items from "./Items";
import { EVENTS, SCENE } from "./constants/Constants";
import Balance from "./Balance";
import Woman from "./Woman";
import Utils from "@holywater-tech/ads-builder/framework/Utils";
import Title from "./Title";

export default class Game extends ParentScene {
  create() {
    this.addBackground("bg");
    // this.addCTA();
    this.initListeners();
    this.sceneNum = -1;
    // this.finalScene();
    // this.totalCoins = 50.0;
    // this.countCoinsBet = 0;
    this.onSwitchScene(SCENE[this.sceneNum]);
    this.addCharacter();
    this.addTitle();
    Utils.addAudio(this, "soundtrack", 0.5, true);
    // this.addBalance();
    // Utils.addAudio(this, "music_trivia", true, 0.5);
    // setTimeout(() => {
    //   this.finalScene();
    // }, 2000);
  }
  initListeners() {
    this.emitter.on(
      EVENTS.ON_CHOICE_CLICK,
      () => {
        this.addFail();
        setTimeout(() => {
          this.onSwitchScene();
        });
      },
      500
    );
  }
  showScene1(scene) {
    this.addUIContainer(scene.assets);
  }
  showScene2(scene) {
    this.uiContainer?.removeItems();
    setTimeout(() => {
      // this.bg.changeBackground("bg2", true, [1.4, 1.4, 1.1, 1.1]);
      this.addUIContainer(scene.assets);
    }, 1000);
  }
  showScene3(scene) {
    this.uiContainer?.removeItems();
    this.addUIContainer(scene.assets);
  }
  showScene4(scene) {
    this.uiContainer?.removeItems();
    this.addUIContainer(scene.assets);
  }
  showScene5(scene) {
    this.uiContainer?.removeItems();
    this.addUIContainer(scene.assets);
  }
  addFail() {
    // Utils.addAudio(this, "error", false, 0.5);
    this.failTop = this.add
      .image(0, 0, "fail_h")
      .addProperties(["pos", "scale"])
      .setCustomAlign("Top")
      .setAlpha(0)
      .setCustomPosition(0, 20, 0, 20)
      .setCustomScale(3, 0.7, 1.2, 0.7)
      .setDepth(100);
    this.failBottom = this.add
      .image(0, 0, "fail_h")
      .addProperties(["pos", "scale"])
      .setCustomAlign("Bottom")
      .setAlpha(0)
      .setCustomPosition(0, -20, 0, -20)
      .setCustomScale(3, 0.7, 1.2, 0.7)
      .setFlipY(true)
      .setDepth(100);
    this.failRight = this.add
      .image(0, 0, "fail_v")
      .addProperties(["pos", "scale"])
      .setCustomAlign("Right")
      .setAlpha(0)
      .setCustomPosition(-20, 0, -20, 0)
      .setCustomScale(0.7, 3, 0.7, 1.2)
      .setDepth(100);
    this.failLeft = this.add
      .image(0, 0, "fail_v")
      .addProperties(["pos", "scale"])
      .setCustomAlign("Left")
      .setFlipX(true)
      .setAlpha(0)
      .setCustomPosition(20, 0, 20, 0)
      .setCustomScale(0.7, 3, 0.7, 1.2)
      .setDepth(100);
    this.tweens.add({
      targets: [this.failTop, this.failBottom, this.failRight, this.failLeft],
      alpha: 1,
      duration: 300,
      hold: 300,
      repeat: 2,
      yoyo: true,
    });
    this.mainContainer.add([
      this.failTop,
      this.failBottom,
      this.failRight,
      this.failLeft,
    ]);
    this.sort();
  }
  onSwitchScene() {
    this.sceneNum += 1;
    const scene = SCENE[this.sceneNum];
    // console.log("scene.name)", scene.name);
    switch (scene?.name) {
      case "scene1":
        this.showScene1(scene);
        break;
      case "scene2":
        this.showScene2(scene);
        break;
      case "scene3":
        this.showScene3(scene);
        break;
      // case "scene4":
      //   this.showScene4(scene);
      //   break;
      // case "scene5":
      //   this.showScene5(scene);
      // break;

      default:
        this.uiContainer?.removeItems();
        setTimeout(() => {
          this.finalScene();
        }, 500);

        break;
    }
  }
  finalScene() {
    // this.bg.changeBackground("bg", true, [1.5, 1.5, 1, 1]);
    this.game.network.addClickToStore(this.bg);
    this.uiContainer?.removeItems();
    // this.tweens.add({
    //   targets: [this.woman, this.balance, this.logo],
    //   alpha: 0,
    //   duration: 200,
    //   delay: 200,
    //   onComplete: () => {
    //     this.balance
    //       .setCustomAlign("Center")
    //       .setCustomPosition(0, 150, 0, 100)
    //       .setCustomScale(0.18, 0.18, 0.15, 0.15);
    //     this.logo
    //       .setCustomAlign("Center")
    //       .setCustomPosition(0, -300, 0, -300)
    //       .setCustomScale(0.5, 0.5, 0.7, 0.7);
    //   },
    // });
    // const scale = this.totalCoins >= 0 ? [0.37, 0.37] : [0.42, 0.42];
    this.title?.hide();
    this.over = this.add
      .image(0, 0, "over")
      .addProperties(["pos", "scale"])
      .setCustomPosition(0, -100, 0, -100)
      .setCustomScale(0.7, 0.7, 0.7, 0.7)
      .setAlpha(0)
      .setDepth(102);
    this.try = this.add
      .image(0, 0, "atlas", "try")
      .addProperties(["pos", "scale"])
      .setCustomPosition(0, 100, 0, 100)
      .setCustomScale(0.7, 0.7, 0.7, 0.7)
      .setAlpha(0)
      .setDepth(102);
    this.bg_hide = this.add
      .image(0, 0, "bg")
      .addProperties(["pos", "scale"])
      .setCustomPosition(0, 0, 0, 0)
      .setCustomScale(0.6, 0.6, 0.6, 0.6)
      .setCustomAlign("Center")
      .setAlpha(0)
      .setDepth(100);

    this.tweens.add({
      targets: [this.over, this.bg_hide, this.try],
      alpha: 1,
      duration: 400,
      delay: 500,
    });
    this.tweens.add({
      targets: this.try,
      scale: "*=0.9",
      duration: 500,
      yoyo: true,
      repeat: -1,
      ease: "Sine.in",
    });
    this.mainContainer.add([this.over, this.bg_hide, this.try]);
    this.sort();
  }
  addBackground(bg, options = {}) {
    this.bg = new Background(this, bg, true, [1.5, 1.5, 1.1, 1.1]).setDepth(
      options.depth || 4
    );
    this.mainContainer.add([this.bg]);
    this.sort();
  }
  addTitle() {
    this.title = new Title(this);
    this.mainContainer.add([this.title]);
    this.sort();
  }
  addUIContainer(options) {
    this.uiContainer = new Items(this, options);
    this.mainContainer.add([this.uiContainer]);
    this.sort();
    this.uiContainer.show();
  }
  addBalance(options) {
    this.balance = new Balance(this, options);
    this.mainContainer.add([this.balance]);
    this.sort();
  }

  addCharacter() {
    this.woman = new Woman(this);
    this.mainContainer.add([this.woman]);
    this.sort();
  }
  addCTA() {
    this.logo = this.add
      .image(0, 0, "atlas", "logo")
      .addProperties(["pos", "scale"])
      .setDepth(37)
      .setCustomAlign("Top Left")
      .setOrigin(0.5, 0.5)
      .setCustomScale(0.7, 0.7, 0.4, 0.4)
      .setCustomPosition(200, 80, 110, 80);
    this.title_m = this.add
      .image(0, 0, "title")
      .addProperties(["pos", "scale"])
      .setDepth(77)
      .setCustomAlign("Bottom")
      .setOrigin(0.5, 0.5)
      .setCustomScale(0.3, 0.3, 0.3, 0.3)
      .setCustomPosition(0, -25, 0, -25);

    this.download = this.add
      .image(0, 0, "atlas", "cta")
      .addProperties(["pos", "scale"])
      .setDepth(37)
      .setCustomAlign("Bottom")
      .setOrigin(0.5, 0.5)
      .setCustomScale(0.6, 0.6, 0.6, 0.6)
      .setCustomPosition(0, -80, 0, -80);
    this.download.setInteractive().on("pointerdown", this.openStore, this);
    this.tweens.add({
      targets: this.download,
      scale: "*=0.9",
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: "Sine.in",
    });
    // this.download.setInteractive().on('pointerdown', this.scene.openStore, this.scene);

    this.mainContainer.add([this.logo, this.download, this.title_m]);
    this.sort();
  }

  openStore() {
    this.game.network.openStore();
  }
}
