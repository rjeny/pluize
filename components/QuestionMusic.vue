<template>
    <div class="question">
        <div>Раунд 1</div>
        <div></div>
        <ClientOnly>
            <Player/>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        question: {
            duration: number;
            
            meta: {
                start: number;
            },
            hint: {
                text?: string;
                media?: string;
            }
        }
    }>();
</script>

<style scoped>
    
</style>