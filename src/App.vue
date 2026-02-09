<template>
    <div>
        <Button
            label="Button"
            @click="() => console.log('Button clicked!')"
        />
    </div>
</template>

<script setup lang="ts">
import { init } from '@/config';

import { Button } from '@/components/atoms';

init();
</script>

<style scoped></style>
