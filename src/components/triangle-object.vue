<template>
    <div class="triange" :style="{
        borderBottom: edgeSize + ' solid ' + color, borderLeft: otherEdge + 'px solid transparent',
        borderRight: otherEdge + 'px solid transparent'
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
            otherEdge: Number,
            color: "",
            mass: ""
        }
    }, created() {
        this.calculateOtherEdges();
        this.color = getRandomColor();
        this.mass = this.edgeSize.replace("0px", "")
    },

    methods: {
        calculateOtherEdges() {
            this.otherEdge = parseInt(this.edgeSize.replace("px", "")) / 2
        }
    }

}
</script>

<style lang="scss">
.triange {
    position: absolute;
    left: calc(50% - 16px);
    width: 0;
    height: 0;

    .mass {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
        color: white;
    }
}
</style>