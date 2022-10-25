<template>
    <div class="square" :style="{ width: edgeSize, height: edgeSize }">
    </div>
</template>

<script>
export default {
    name: 'SquareObject',
    props: {
        edgeSize: String
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