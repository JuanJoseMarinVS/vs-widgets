<template>
    <button
        type="button"
        @click="onClick"
        :label="label"
        :disabled="disabled"
        :class="cn(buttonVariant({ variant, size }))"
        data-tokens
    >
        <slot>{{ label }}</slot>
    </button>
</template>

<script lang="ts" setup>
import { getTokens } from '@/stores';
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { onMounted } from 'vue';

defineOptions({
    name: 'MyButton',
});

withDefaults(
    defineProps<{
        /**
         * The label of the button
         */
        label: string;
        /**
         * variant of the button
         */
        variant?: VariantProps<typeof buttonVariant>['variant'];
        /**
         * size of the button
         */
        size?: 'small' | 'medium' | 'large';
        /**
         * disabled state of the button
         */
        disabled?: boolean;
    }>(),
    { variant: 'primary', size: 'small', disabled: false },
);

const emit = defineEmits<{
    (e: 'click'): void;
}>();

const buttonVariant = cva('vs-widgets', {
    variants: {
        variant: {
            primary: 'bg-brand',
            danger: 'btn bg-red-600',
        },
        size: {
            small: 'px-3 py-2 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-5 py-3 text-lg',
        },
    },
    defaultVariants: { variant: 'primary', size: 'small' },
});

const onClick = () => {
    emit('click');
};

onMounted(() => {
    console.log('Button component mounted', getTokens());
});
</script>
