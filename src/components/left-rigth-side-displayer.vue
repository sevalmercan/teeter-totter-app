<template>
    <div :class="['left-rigth-flag ' + side]" v-if="isShown">
        TORK İS ON THE {{ text }}
    </div>
</template>


<script>
export default {
    props: {
        isShown: Boolean,
        text: String,
        side: String
    }
}
</script>

<style lang="scss">
.left-rigth-flag {
    display: flex;
    align-items: center;
    margin: 20px;
    position: absolute;
    top: 50%;
}

.right {
    left: 0;
}

.left {
    right: 0;
}
</style>