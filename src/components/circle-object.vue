<template>
    <div class="circle">
    </div>
</template>

<script>
export default {
    name: 'CircleObject',
}
</script>

<style>
.circle {
    width: 15px;
    height: 15px;
    background-color: blue;
    position: absolute;
    left: calc(50% - 16px);
    border-radius: 50%;
}
</style>