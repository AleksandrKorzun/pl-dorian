import { EVENTS_DEFAULT } from "@holywater-tech/ads-builder/framework/components/EventsDispatcher";
import Screen from "../Screen";

export const EVENTS = {
  ...EVENTS_DEFAULT,
  ON_LETTER_CLICK: "onLetterClick",
  ON_WORD_COMPLETE: "onWordComplete",
  ON_CHOICE_CLICK: "onChoiceClick",
  ON_BONUS_CLICK1: "onBonusClick1",
  ON_BONUS_CLICK2: "onBonusClick2",
  ON_BONUS_CLICK3: "onBonusClick3",
  ON_OPEN_STORE: "onOpenStore",
  ON_NEXT_LEVEL: "onNextLevel",
  ADD_TUTORIAL: "addTutorial",
  REMOVE_TUTORIAL: "removeTutorial",
};

export const ITEMS = ["1", "2", "3", "4", "5"];
export const LAYERS_DEPTH = {
  TITLE: 5,
  ITEM_GLOW: 35,
  ITEM_BASE: 34,
  ITEM: 30,
  MISTAKES: 33,
  TIMER: 35,
  HAND_TUTORIAL: 44,
  TOP_ASSETS: 33,
};

export const SCENE = [
  {
    name: "scene1",
    assets: [
      { name: "choice1_1", cost: -80 },
      { name: "choice1_2", cost: -350 },
    ],
  },
  {
    name: "scene2",
    assets: [
      { name: "choice2_1", cost: 30 },
      { name: "choice2_2", cost: 0 },
    ],
  },
  {
    name: "scene3",
    assets: [
      { name: "choice3_1", cost: 0 },
      { name: "choice3_2", cost: -35 },
    ],
  },
  // {
  //   name: "scene4",
  //   assets: [
  //     { name: "choice4_1", cost: -20 },
  //     { name: "choice4_2", cost: -80 },
  //   ],
  // },
  // {
  //   name: "scene5",
  //   assets: [
  //     { name: "choice5_1", cost: 0 },
  //     { name: "choice5_2", cost: 30 },
  //   ],
  // },
];
export const POSITION = {
  choices: Screen.phoneProportions ? [0, 380, 0, 480] : [0, 430, 0, 480],
  mistakes: Screen.phoneProportions ? [0, 180, 0, 230] : [0, 180, 0, 280],
  buttons: Screen.phoneProportions ? [0, 250, 0, 300] : [0, 250, 0, 350],
  messageTitle: Screen.phoneProportions
    ? [0, -100, 0, -100]
    : [0, -100, 0, -30],
  level: Screen.phoneProportions ? [0, 0, 0, 0] : [0, 0, 0, 0],
};
export const SCALE = {
  keyboard: Screen.phoneProportions
    ? [0.8, 0.8, 0.8, 0.8]
    : [0.8, 0.8, 0.8, 0.8],
  mistakes: Screen.phoneProportions ? [0, 180, 0, 230] : [0, 180, 0, 280],
  buttons: Screen.phoneProportions ? [0, 250, 0, 300] : [0, 250, 0, 350],
  title: Screen.phoneProportions
    ? [0.22, 0.22, 0.22, 0.22]
    : [0.22, 0.22, 0.22, 0.22],
  messageTitle: Screen.phoneProportions ? [0, 350, 0, -100] : [0, 350, 0, -30],
  level: Screen.phoneProportions ? [0, 0, 0, 0] : [0, 0, 0, 0],
};

export const SHELFS = [
  {
    name: "shelf1",
    x: -256,
    y: -220,
    assets: ["item_bunnyDoll_1", "", "item_dragonFigure_1"],
  },
  {
    name: "shelf2",
    x: -256,
    y: -50,
    assets: ["item_nutcracker_1", "item_toyBlocks_1", "item_toyBlocks_2"],
  },
  {
    name: "shelf3",
    x: -256,
    y: 120,
    assets: ["item_girlDoll_1", "item_dragonFigure_1", "item_toyBlocks_2"],
  },
  {
    name: "shelf4",
    x: -256,
    y: 290,
    assets: ["item_nutcracker_1", "item_bunnyDoll_1", "item_stackingRings_2"],
  },

  {
    name: "shelf5",
    x: 0,
    y: -220,
    assets: ["item_toyBlocks_1", "item_nutcracker_1", "item_bunnyDoll_1"],
  },
  {
    name: "shelf6",
    x: 0,
    y: -50,
    assets: ["", "item_stackingRings_2", "item_girlDoll_1"],
  },
  {
    name: "shelf7",
    x: 0,
    y: 120,
    assets: ["item_teddyBear_3", "", "item_teddyBear_3"],
  },
  {
    name: "shelf8",
    x: 0,
    y: 290,
    assets: ["item_girlDoll_1", "", "item_dragonFigure_1"],
  },
  {
    name: "shelf9",
    x: 256,
    y: -220,
    assets: ["item_teddyBear_3", "item_bunnyDoll_2", "item_stackingRings_2"],
  },
  {
    name: "shelf10",
    x: 256,
    y: -50,
    assets: ["item_toyBlocks_1", "item_bunnyDoll_2", "item_ball_3"],
  },
  {
    name: "shelf11",
    x: 256,
    y: 120,
    assets: ["item_bunnyDoll_2", "item_ball_3", ""],
  },
  {
    name: "shelf12",
    x: 256,
    y: 290,
    assets: ["", "item_ball_3", "item_toyBlocks_2"],
  },
];

export const POSITIONS_PHONE = {
  woman: Screen.phoneProportions ? [300, -150, 0, -150] : [300, 0, 0, 0],
  choices: Screen.phoneProportions ? [300, 0, 0, -200] : [300, 0, 0, -130],
};
export const POSITIONS = {
  word:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? POSITIONS_PHONE.word
      : [280, 0, 0, 0],
  keyboard:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? POSITIONS_PHONE.keyboard
      : [280, 0, 0, -120],
};

const SCALES_PHONE = {
  woman: Screen.phoneProportions
    ? [0.46, 0.46, 0.6, 0.6]
    : [0.5, 0.5, 0.45, 0.45],
  img: Screen.phoneProportions ? [0.7, 0.7, 0.7, 0.7] : [0.75, 0.75, 0.6, 0.6],
  image_bg: Screen.phoneProportions
    ? [0.8, 1, 1.4, 1.4]
    : [0.9, 1.1, 1.4, 1.15],
  timer: Screen.phoneProportions ? [1.6, 1.6, 1, 1] : [1.4, 1.4, 1, 1],
};

export const SCALES = {
  woman:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? SCALES_PHONE.woman
      : [0.46, 0.46, 0.46, 0.46],
  img:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? SCALES_PHONE.img
      : [0.65, 0.65, 0.56, 0.56],
  image_bg:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? SCALES_PHONE.image_bg
      : [0.75, 1, 1.4, 0.9],
};
