<template>
    <div>
        <div v-if="!inited" class="init">
            <ElButton type="primary" plain @click="inited = true">Нажми, чтобы настроиться на волну</ElButton>
        </div>
            <QuestionMusic :question="{}" v-else/>
        </div>
</template>

<script setup>
    import { QUIZ_ROOM } from "~/constants/ws";

    const inited = ref(false);
    const socket = useWebSocket(QUIZ_ROOM.QUIZ);

    const question = {
        
    }
</script>
