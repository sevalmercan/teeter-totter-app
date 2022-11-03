<template>
    <div class="tork-container">
        <div>{{ leftPos }}</div>
        <div>{{ rightPos }}</div>
    </div>
</template>

<script>
export default {
    name: 'tork-displayer',
    props: {
        leftPos: Number,
        rightPos: Number
    }
}
</script>

<style lang="scss">
.tork-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    font-size: 30px;
}
</style>
