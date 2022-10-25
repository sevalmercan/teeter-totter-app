<template>
    <div>
        <button @click="addObjectToArray"> CLİCK</button>
        <div ref="modal" class="game-board">
            <div v-for="item in objectArray" :key="item.id">
                <component :key="item.id" :is="item.componentName" ref="square"
                    :style="{ top: item.topNumber + 'px', left: item.leftNumber + 'px' }">
                </component>
            </div>

        </div>
    </div>
</template>
  
<script>
import mixin from '../mixin';
import SquareObject from "./square-object.vue"
import TriangleObject from "./triangle-object.vue"
import CircleObject from "./circle-object.vue"
const MIDDLE_OF_THE_BOARD = 175
const END_OF_THE_BOARD = 330

export default {
    mixins: [mixin],
    components: { SquareObject, TriangleObject, CircleObject },
    data() {
        return {
            objectArray: [],
            componentNames: ["TriangleObject", "CircleObject", "SquareObject"],

        }
    },
    created() {
        // İnitialaze game
        this.addObjectToArray();

        const that = this;
        const timer = setInterval(function () {
            if (that.currentObject?.topNumber >= END_OF_THE_BOARD) {
                that.addObjectToArray();

            } else if (that.objectArray?.length >= 1) {
                that.moveDown()
            }
        }, 1000);

    },
    methods: {
        moveLeft() {
            this.currentObject.leftNumber = this.currentObject.leftNumber - 5;
        },

        moveRight() {
            this.currentObject.leftNumber = this.currentObject.leftNumber + 5;
        },
        moveDown() {

            this.currentObject.topNumber = this.currentObject.topNumber + 10;
        },
        addObjectToArray() {
            const randomNumber = this.getRandomInt(0, 2)
            console.log(randomNumber)

            const currentComponent = this.componentNames[this.getRandomInt(0, 2)]
            this.objectArray.push({ id: this.numberOfObject, topNumber: 0, leftNumber: MIDDLE_OF_THE_BOARD, componentName: currentComponent })
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    computed: {
        currentObject() {
            return this.objectArray[this.numberOfObject - 1]
        },
        numberOfObject() {
            return this.objectArray.length
        },

    }
}
</script>
  
<style>
.game-board {
    border: 2px solid red;
    width: 350px;
    height: 342px;
    position: relative;
}
</style>
  