<template>
    <div class="circle" :style="{
        width: edgeSize, height: edgeSize,
        backgroundColor: color
    }">
    </div>
</template>

<script>
import { getRandomColor } from "../common/helper"
export default {
    name: 'CircleObject',
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
.circle {
    background-color: blue;
    position: absolute;
    left: calc(50% - 16px);
    border-radius: 50%;
}
</style>