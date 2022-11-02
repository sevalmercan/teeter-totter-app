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
import mixin from '../common/mixin';
import SquareObject from "./square-object.vue"
import TriangleObject from "./triangle-object.vue"
import CircleObject from "./circle-object.vue"
import { getRandomInt } from "../common/helper"
import { GAME_BOARD_HEİGTH, MIDDLE_OF_THE_BOARD } from "../common/constants"

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
        // İnitilaze game
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
        addObjectToArray() {
            this.calculateEndOfTheBoard()
            const deneme = MIDDLE_OF_THE_BOARD - (this.objectHeigth / 2)
            const currentComponent = this.componentNames[(0, 2)]
            this.objectArray.push({
                id: this.numberOfObject,
                topNumber: 0,
                leftNumber: deneme,
                componentName: currentComponent,
                styleAttibutes: { edgeSize: this.objectHeigth + 'px' }
            })
        },
        calculateEndOfTheBoard() {
            this.objectHeigth = getRandomInt(20, 40)
            this.pathToGo = GAME_BOARD_HEİGTH - this.objectHeigth
            this.leftPath = this.pathToGo % 10
            this.endOfTheBoard = this.pathToGo - this.leftPath
        },
        calculateLeftAndRightPos() {
            const position = this.currentObject.leftNumber + (this.objectHeigth / 2)
            if (position > MIDDLE_OF_THE_BOARD) {
                this.rightPos += this.objectHeigth
            } if (position < MIDDLE_OF_THE_BOARD) {
                this.leftPos += this.objectHeigth
            }
        },
    },
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
  