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

export default {
    mixins: [mixin],

    data() {
        return {
            topNumber: 0,
            leftNumber: 175,
            counter: 0,
            objectArray: [],
        }
    },
    created() {

        const that = this;
        const timer = setInterval(function () {
            if (that.objectArray?.length > 0 && that.currentObject.topNumber >= 332) {
                clearInterval(timer);
            } else {
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
            if (this.objectArray.length >= 1) {
                console.log()
                this.currentObject.topNumber = this.currentObject.topNumber + 10;
            }

        },
        addObjectToArray() {
            this.objectArray.push({ id: this.counter, topNumber: 0, leftNumber: 175 })
            this.counter++
        }
    },
    computed: {
        currentObject() {
            return this.objectArray[0]
        }
    }
}
</script>
  
<style>
.game-board {

    border: 2px solid red;
    width: 350px;
    height: 350px;
}

.square {
    width: 15px;
    height: 15px;
    background-color: blue;
    position: relative;
    left: calc(50% - 16px);


}
</style>
  