<template>
    <div class="game-container">
        <left-rigth-side-displayer text="LEFT SİDE" side="right" :isShown="isObjectOnTheLeftSide" />
        <div>
            <tork-displayer :rightPos="rightPos" :leftPos="leftPos" />
            <div ref="modal" class="game-board" :style="{ transform: 'rotate(' + degree + 'deg)' }">
                <div v-for="item in objectArray" :key="item.id">
                    <component :key="item.id" :is="item.componentName" v-bind="item.styleAttibutes"
                        :style="{ top: item.topNumber + 'px', left: item.leftNumber + 'px' }">
                    </component>
                </div>
                <div class="line-container">
                    <div class="vertical-line" v-for="index in 18" :key="index">
                    </div>
                </div>
            </div>
        </div>
        <left-rigth-side-displayer text="RİGTH SİDE" side="left" :isShown="isObjectOnTheRightSide" />
    </div>
</template>
  
<script>
import mixin from '../common/mixin';
import SquareObject from "./square-object.vue"
import TriangleObject from "./triangle-object.vue"
import CircleObject from "./circle-object.vue"
import TorkDisplayer from './tork-displayer.vue';
import leftRigthSideDisplayer from './left-rigth-side-displayer.vue';
import { getRandomInt } from "../common/helper"
import { GAME_BOARD_HEİGTH, MIDDLE_OF_THE_BOARD, objectHeigthRange } from "../common/constants"

export default {
    mixins: [mixin],
    components: { SquareObject, TriangleObject, CircleObject, TorkDisplayer, leftRigthSideDisplayer },
    data() {
        return {
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
            this.objectHeigth = objectHeigthRange[getRandomInt(0, objectHeigthRange.length - 1)]
            this.pathToGo = GAME_BOARD_HEİGTH - this.objectHeigth
            this.leftPath = this.pathToGo % 10
            this.endOfTheBoard = this.pathToGo - this.leftPath
        },
        calculateLeftAndRightPos() {
            if (this.isObjectOnTheRightSide) {
                this.rightPos += this.rightTorque

            } if (this.isObjectOnTheLeftSide) {
                this.leftPos += this.leftTorque
            }
        },
    },
}
</script>
  
<style lang="scss">
.game-container {
    display: flex;
    flex-direction: row;

    .game-board {
        outline: 2px solid red;
        width: 350px;
        height: 340px;
        position: relative;

        .line-container {
            display: flex;
            flex-direction: row;
            position: absolute;
            bottom: -6px;
            left: -2px;

            .vertical-line {
                border-left: 1px solid black;
                height: 5px;
                margin-right: 20px;
            }
        }

    }
}
</style>
  