import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import Button from '../button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Atoms/Button',
    component: Button,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'danger'],
        },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean', defaultValue: false },
    },
    args: {
        variant: 'primary',
        onClick: fn(),
        disabled: false,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

type ButtonTestExpectations = {
    enabled: boolean;
    clickCalls: number;
};

type PlayContext = Parameters<NonNullable<Story['play']>>[0];
type StoryArgs = PlayContext['args'];

const playButton =
    (expected: ButtonTestExpectations) =>
    async ({ canvasElement, args }: { canvasElement: HTMLElement; args: StoryArgs }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: /button/i });

        if (expected.enabled) {
            await expect(button).toBeEnabled();
        } else {
            await expect(button).toBeDisabled();
        }

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalledTimes(expected.clickCalls);
    };

export const Primary: Story = {
    args: {
        variant: 'primary',
        label: 'Button',
        disabled: false,
    },
    play: playButton({ enabled: true, clickCalls: 1 }),
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        label: 'Button',
        disabled: false,
    },
    play: playButton({ enabled: true, clickCalls: 1 }),
};

export const Large: Story = {
    args: {
        label: 'Button',
        size: 'large',
        disabled: false,
    },
    play: playButton({ enabled: true, clickCalls: 1 }),
};

export const Medium: Story = {
    args: {
        label: 'Button',
        size: 'medium',
        disabled: false,
    },
    play: playButton({ enabled: true, clickCalls: 1 }),
};

export const Small: Story = {
    args: {
        label: 'Button',
        size: 'small',
        disabled: false,
    },
    play: playButton({ enabled: true, clickCalls: 1 }),
};

export const Disabled: Story = {
    args: {
        label: 'Button',
        disabled: true,
    },
    play: playButton({ enabled: false, clickCalls: 0 }),
};
