<template>
    <div class="square" :style="{
        width: edgeSize, height: edgeSize,
        backgroundColor: color
    }">
    </div>
</template>

<script>
import { getRandomColor } from "../common/helper"
export default {
    name: 'SquareObject',
    props: {
        edgeSize: String
    },
    data() {
        return {
            color: ""
        }
    },
    created() {
        this.color = getRandomColor()
    }
}
</script>


<style>
.square {
    background-color: blue;
    position: absolute;
    left: calc(50% - 16px);


}
</style>