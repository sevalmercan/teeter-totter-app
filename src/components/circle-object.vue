<template>
    <div class="circle" :style="{ width: edgeSize, height: edgeSize }">
    </div>
</template>

<script>
export default {
    name: 'CircleObject',
    props: {
        edgeSize: String
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