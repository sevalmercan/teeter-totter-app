<template>
    <div class="game-container">
        <left-rigth-side-displayer text="LEFT SİDE" side="right" :isShown="isObjectOnTheLeftSide" />
        <game-board></game-board>
        <left-rigth-side-displayer text="RİGTH SİDE" side="left" :isShown="isObjectOnTheRightSide" />
    </div>

</template>


<script>
import mixin from '@/common/mixin';
import GameBoard from '@/components/game-board.vue';
import LeftRigthSideDisplayer from '@/components/left-rigth-side-displayer.vue';
export default {
    components: { GameBoard, LeftRigthSideDisplayer },
    mixins: [mixin]
}
</script>

<style lang="scss">
.game-container {
    display: flex;
    flex-direction: row;
}
</style>