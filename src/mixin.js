export default {
  data() {
    return {};
  },
  created() {
    let that = this;
    document.addEventListener("keyup", function (event) {
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
    });
  },
};
