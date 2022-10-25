<template>
    <div class="triange">
    </div>
</template>


<script>
export default {
    name: 'TriangleObject',
}
</script>

<style>
.triange {
    position: absolute;
    left: calc(50% - 16px);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 15px solid blue
}
</style>