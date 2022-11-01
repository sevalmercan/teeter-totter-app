<template>
    <div class="triange" :style="{
        borderBottom: edgeSize + ' solid ' + color, borderLeft: otherEdge + 'px solid transparent',
        borderRight: otherEdge + 'px solid transparent'
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
            otherEdge: Number,
            color: ""
        }
    }, created() {
        this.calculateOtherEdges(),
            this.color = getRandomColor()
    },

    methods: {
        calculateOtherEdges() {
            this.otherEdge = parseInt(this.edgeSize.replace("px", "")) / 2
        }
    }

}
</script>

<style>
.triange {
    position: absolute;
    left: calc(50% - 16px);
    width: 0;
    height: 0;


}
</style>