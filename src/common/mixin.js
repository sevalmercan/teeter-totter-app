import { MIDDLE_OF_THE_BOARD } from "./constants";
import { store } from "./store";
export default {
  data() {
    return {
      objectHeigth: Number,
      pathToGo: Number,
      leftPath: Number,
      endOfTheBoard: Number,
    };
  },
  created() {
    let that = this;
    document.addEventListener(
      "keyup",
      function (event) {
        const key_code = event.key;
        switch (key_code) {
          case "ArrowLeft": //left arrow key
            that.moveLeft();
            break;
          case "ArrowRight": //right arrow key
            that.moveRight();
            break;
          case "ArrowDown": //down arrow key
            that.moveDown(10);
            break;
        }
      }
    );
  },
  methods: {
    moveLeft() {
      this.currentObject.leftNumber -= 10;
    },

    moveRight() {
      this.currentObject.leftNumber += 10;
    },
    moveDown(number) {
      this.currentObject.topNumber += number;
    },
  },
  computed: {
    objectArray() {
      return store.objectArray;
    },
    currentObject() {
      return store.objectArray[
        this.numberOfObject - 1
      ];
    },

    numberOfObject() {
      return store.objectArray.length;
    },
    degree() {
      if (this.rightPos > this.leftPos) {
        return 5;
      } else if (this.leftPos > this.rightPos) {
        return -5;
      }
      return 0;
    },
    objectCurrentPosition() {
      return (
        this.currentObject.leftNumber +
        this.objectHeigth / 2
      );
    },
    rightTorque() {
      return (
        this.objectHeigth *
        (this.objectCurrentPosition -
          MIDDLE_OF_THE_BOARD)
      );
    },
    leftTorque() {
      return (
        this.objectHeigth *
        (MIDDLE_OF_THE_BOARD -
          this.objectCurrentPosition)
      );
    },
    isObjectOnTheRightSide() {
      return (
        this.objectCurrentPosition >
        MIDDLE_OF_THE_BOARD
      );
    },
    isObjectOnTheLeftSide() {
      return (
        this.objectCurrentPosition <
        MIDDLE_OF_THE_BOARD
      );
    },
  },
};
