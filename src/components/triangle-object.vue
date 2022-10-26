<template>
    <div class="triange">
    </div>
</template>


<script>
export default {
    name: 'CircleObject',
}
</script>

<style>
.triange {
    position: absolute;
    left: calc(50% - 16px);
    width: 0;
    height: 0;
    border-left: 16.5px solid transparent;
    border-right: 16.5px solid transparent;
    border-bottom: 33px solid blue
}
</style>