<template>
    <div>
        <audio ref="player" :src="mySource" />
        <canvas ref="canvas" />
    </div>
</template>

<script setup lang="ts">
import { useAVLine } from 'vue-audio-visual';

const player = ref<HTMLAudioElement>();
const canvas = ref<HTMLCanvasElement>();
const mySource = "/music/music1.mp3";

useAVLine(player, canvas, {
    src: mySource,
});

console.log(player);

onMounted(() => {
    if (player.value) {
        player.value.oncanplay = async () => {
            player.value?.play();
        };
    }
})


</script>

<style scoped>
audio {
    display: none;
}
</style>