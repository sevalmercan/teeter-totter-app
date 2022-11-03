<template>
    <div class="circle" :style="{
        width: edgeSize, height: edgeSize,
        backgroundColor: color
    }">
        <div class="mass">
            {{ mass }}
        </div>

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
            color: "",
            mass: ""
        }
    },
    created() {
        this.color = getRandomColor()
        this.mass = this.edgeSize.replace("0px", "")
    }
}
</script>

<style lang="scss">
.circle {
    background-color: blue;
    position: absolute;
    left: calc(50% - 16px);
    border-radius: 50%;

    .mass {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
        color: white;

    }
}
</style>