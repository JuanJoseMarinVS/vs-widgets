<template>
    <div
        ref="hostRef"
        class="h-52"
    />
    <Teleport
        v-if="mountPoint"
        :to="mountPoint"
    >
        <slot />
    </Teleport>
</template>

<script lang="ts" setup>
import { getTokens } from '@/stores';
import { onMounted, ref } from 'vue';

const hostRef = ref<HTMLElement | null>(null);
const mountPoint = ref<HTMLElement | null>(null);

onMounted(async () => {
    if (!hostRef.value) return;

    const shadow = hostRef.value.attachShadow({ mode: 'closed' });

    const app = document.createElement('div');
    app.id = 'ds-app';

    const tokens = getTokens();
    Object.entries(tokens).forEach(([key, value]) => {
        app.style.setProperty(key, value);
    });

    shadow.appendChild(app);

    mountPoint.value = app;
});
</script>
