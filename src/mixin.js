export default {
  data() {
    return {
      ObjectHeigth: Number,
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
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return (
        Math.floor(
          Math.random() * (max - min + 1)
        ) + min
      );
    },
  },
};
