<template>
    <div>
        {{ leftPos }} {{ rightPos }}
        <div ref="modal" class="game-board" :style="{ transform: 'rotate(' + degree + 'deg)' }">
            <div v-for="item in objectArray" :key="item.id">
                <component :key="item.id" :is="item.componentName" v-bind="item.styleAttibutes"
                    :style="{ top: item.topNumber + 'px', left: item.leftNumber + 'px' }">
                </component>

            </div>
            <div class="line-container">
                <div class="vertical-line" v-for="index in 22" :key="index">

                </div>
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
            const objectHeightRange = [20, 25, 30, 35, 40, 45, 50]
            this.objectHeigth = objectHeightRange[getRandomInt(0, 6)]
            this.pathToGo = GAME_BOARD_HEİGTH - this.objectHeigth
            this.leftPath = this.pathToGo % 10
            this.endOfTheBoard = this.pathToGo - this.leftPath
        },
        calculateLeftAndRightPos() {
            const position = this.currentObject.leftNumber + (this.objectHeigth / 2)
            if (position > MIDDLE_OF_THE_BOARD) {
                this.rightPos += this.objectHeigth * (this.currentObject.leftNumber + MIDDLE_OF_THE_BOARD)

            } if (position < MIDDLE_OF_THE_BOARD) {
                this.leftPos += this.objectHeigth * (MIDDLE_OF_THE_BOARD - this.currentObject.leftNumber)
            }
        },
    },
    computed: {

        degree() {
            if (this.rightPos > this.leftPos) {
                return 5
            }
            else if (this.leftPos > this.rightPos) {
                return -5
            }
            return 0
        }
    }
}
</script>
  
<style lang="scss">
.game-board {
    border: 2px solid red;
    width: 350px;
    height: 340px;
    position: relative;

    .line-container {
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: -6px;

        .vertical-line {
            border-left: 6px solid black;
            height: 5px;
            margin-right: 10px;
        }
    }

}
</style>
  