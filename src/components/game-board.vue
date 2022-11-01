<template>
    <div>
        {{ leftPos }} {{ rightPos }}
        <div ref="modal" class="game-board">
            <div v-for="item in objectArray" :key="item.id">
                <component :key="item.id" :is="item.componentName" v-bind="item.styleAttibutes"
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

const GAME_BOARD_HEİGTH = 340
const MIDDLE_OF_THE_BOARD = 175

export default {
    mixins: [mixin],
    components: { SquareObject, TriangleObject, CircleObject },
    data() {
        return {
            objectArray: [],
            componentNames: ["SquareObject", "CircleObject", "TriangleObject"],
            leftPos: 0,
            rightPos: 0
        }
    },
    created() {
        // İnitialaze game
        this.addObjectToArray();

        const that = this;
        setInterval(function () {

            if (that.currentObject?.topNumber >= that.endOfTheBoard) {
                that.moveDown(that.leftPath)
                that.calculateLeftAndRightPos()
                that.addObjectToArray();

            } else if (that.objectArray?.length >= 1) {
                that.moveDown(10)
            }
        }, 1000);

    },
    methods: {
        moveLeft() {
            this.currentObject.leftNumber -= 5;
        },

        moveRight() {
            this.currentObject.leftNumber += 5;
        },
        moveDown(number) {

            this.currentObject.topNumber += number;
        },
        addObjectToArray() {

            this.calculateEndOfTheBoard()
            const currentComponent = this.componentNames[this.getRandomInt(0, 2)]
            this.objectArray.push({ id: this.numberOfObject, topNumber: 0, leftNumber: MIDDLE_OF_THE_BOARD, componentName: currentComponent, styleAttibutes: { edgeSize: this.ObjectHeigth + 'px' } })
        },
        calculateEndOfTheBoard() {
            this.ObjectHeigth = this.getRandomInt(20, 40)
            this.pathToGo = GAME_BOARD_HEİGTH - this.ObjectHeigth
            this.leftPath = this.pathToGo % 10
            this.endOfTheBoard = this.pathToGo - this.leftPath
        },
        calculateLeftAndRightPos() {
            const position = this.currentObject.leftNumber + (this.ObjectHeigth / 2)
            if (position > 176) {
                this.rightPos += this.ObjectHeigth
            } else {
                this.leftPos += this.ObjectHeigth
            }
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
    height: 340px;
    position: relative;
}
</style>
  