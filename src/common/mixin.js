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
    currentObject() {
      return this.objectArray[
        this.numberOfObject - 1
      ];
    },
    numberOfObject() {
      return this.objectArray.length;
    },
  },
};
