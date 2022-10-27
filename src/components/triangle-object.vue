<template>
    <div class="triange" :style="{
        borderBottom: edgeSize + ' solid blue', borderLeft: otherEdge + 'px solid transparent',
        borderRight: otherEdge + 'px solid transparent'
    }">
    </div>
</template>


<script>
export default {
    name: 'CircleObject',
    props: {
        edgeSize: String
    },
    data() {
        return {
            otherEdge: Number
        }
    }, created() {
        this.calculateOtherEdges()
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