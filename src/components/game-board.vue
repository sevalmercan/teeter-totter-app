<template>
    <div>
        <button @click="addObjectToArray"> CLİCK</button>
        <div ref="modal" class="game-board">
            <div v-for="item in objectArray" :key="item.id">
                <div :key="item.id" class=" square" ref="square"
                    :style="{ top: item.topNumber + 'px', left: item.leftNumber + 'px' }">
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import mixin from '../mixin';

const MIDDLE_OF_THE_BOARD = 175
const END_OF_THE_BOARD = 330

export default {
    mixins: [mixin],
    data() {
        return {
            objectArray: [],
        }
    },
    created() {

        // İnitialaze game
        this.addObjectToArray();

        const that = this;
        const timer = setInterval(function () {
            if (that.currentObject?.topNumber >= END_OF_THE_BOARD) {
                console.log(that.objectArray)
                that.addObjectToArray();


            } else if (that.objectArray?.length >= 1) {
                console.log(that.currentObject?.topNumber)
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
            this.objectArray.push({ id: this.numberOfObject, topNumber: 0, leftNumber: MIDDLE_OF_THE_BOARD })
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

.square {
    width: 15px;
    height: 15px;
    background-color: blue;
    position: absolute;
    left: calc(50% - 16px);


}
</style>
  