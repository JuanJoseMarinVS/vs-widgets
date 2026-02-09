import { reactive, readonly } from 'vue';

import type {
    CommonCssVarsInterface,
    LibraryConfigInterface,
    ThemeCssVarsInterface,
    ThemeMode,
} from '@/common/interfaces';

const defaultThemeLightCss: ThemeCssVarsInterface = {
    'color-brand': '#FF863F',
    'color-brand-focus': '#EA580C',
    'color-brand-content': '#2E0E05',
    'color-brand-soft': '#FFF7ED',

    'color-secondary': '#61738D',
    'color-secondary-focus': '#475569',
    'color-secondary-content': '#FFFFFF',
    'color-secondary-soft': '#F8FAFC',

    'color-accent': '#14B8A6',
    'color-accent-focus': '#0D9488',
    'color-accent-content': '#FFFFFF',
    'color-accent-soft': '#F0FDFA',

    'color-neutral': '#1F2937',
    'color-neutral-focus': '#111827',
    'color-neutral-content': '#F3F4F6',
    'color-neutral-soft': '#E5E7EB',

    'color-base-100': '#FFFFFF',
    'color-base-200': '#F9FAFB',
    'color-base-300': '#F3F4F6',
    'color-base-400': '#E5E7EB',
    'color-base-content': '#111827',

    'color-info': '#3B82F6',
    'color-info-focus': '#2563EB',
    'color-info-content': '#FFFFFF',
    'color-info-soft': '#EFF6FF',

    'color-success': '#16A34A',
    'color-success-focus': '#15803D',
    'color-success-content': '#FFFFFF',
    'color-success-soft': '#F0FDF4',

    'color-warning': '#F59E0B',
    'color-warning-focus': '#D97706',
    'color-warning-content': '#030712',
    'color-warning-soft': '#FFFBEB',

    'color-error': '#DC2626',
    'color-error-focus': '#B91C1C',
    'color-error-content': '#FFFFFF',
    'color-error-soft': '#FEF2F2',
};
const defaultThemeDarkCss: ThemeCssVarsInterface = {
    'color-brand': '#FB923C',
    'color-brand-focus': '#FDBA74',
    'color-brand-content': '#2E0E05',
    'color-brand-soft': '#7C2D12',

    'color-secondary': '#94A3B8',
    'color-secondary-focus': '#CBD5E1',
    'color-secondary-content': '#020617',
    'color-secondary-soft': '#0F172A',

    'color-accent': '#2DD4BF',
    'color-accent-focus': '#5EEAD4',
    'color-accent-content': '#042F2E',
    'color-accent-soft': '#134E4A',

    'color-neutral': '#F9FAFB',
    'color-neutral-focus': '#F3F4F6',
    'color-neutral-content': '#111827',
    'color-neutral-soft': '#1F2937',

    'color-base-100': '#030712',
    'color-base-200': '#111827',
    'color-base-300': '#1F2937',
    'color-base-400': '#374151',
    'color-base-content': '#F3F4F6',

    'color-info': '#60A5FA',
    'color-info-focus': '#93C5FD',
    'color-info-content': '#172554',
    'color-info-soft': '#172554',

    'color-success': '#4ADE80',
    'color-success-focus': '#86EFAC',
    'color-success-content': '#052E16',
    'color-success-soft': '#14532D',

    'color-warning': '#FBBF24',
    'color-warning-focus': '#FCD34D',
    'color-warning-content': '#030712',
    'color-warning-soft': '#451A03',

    'color-error': '#F87171',
    'color-error-focus': '#FCA5A5',
    'color-error-content': '#450A0A',
    'color-error-soft': '#7F1D1D',
};
const defaultCommonCss: CommonCssVarsInterface = {
    'space-container-padding-xs': 8,
    'space-container-padding-sm': 16,
    'space-container-padding-md': 24,
    'space-container-padding-lg': 32,
    'space-container-padding-xl': 48,

    'space-interactive-padding-x-sm': 4,
    'space-interactive-padding-y-sm': 8,
    'space-interactive-padding-x-md': 8,
    'space-interactive-padding-y-md': 16,
    'space-interactive-padding-x-lg': 16,
    'space-interactive-padding-y-lg': 24,
    'space-interactive-padding-x-xl': 24,
    'space-interactive-padding-y-xl': 32,

    'space-container-gap-xxs': 4,
    'space-container-gap-xs': 8,
    'space-container-gap-sm': 16,
    'space-container-gap-md': 24,
    'space-container-gap-lg': 32,
    'space-container-gap-xl': 40,

    'space-interactive-gap-sm': 2,
    'space-interactive-gap-md': 4,
    'space-interactive-gap-lg': 8,
    'space-interactive-gap-xl': 16,

    'shape-container-radius-none': 1,
    'shape-container-radius-xs': 4,
    'shape-container-radius-sm': 8,
    'shape-container-radius-md': 16,
    'shape-container-radius-lg': 24,
    'shape-container-radius-xl': 32,

    'shape-interactive-radius-none': 1,
    'shape-interactive-radius-sm': 8,
    'shape-interactive-radius-md': 16,
    'shape-interactive-radius-full': 9999,

    'border-width-none': 1,
    'border-width-hairline': 0.5,
    'border-width-default': 1,
    'border-width-thick': 2,
    'border-width-heavy': 4,
};

type DesignTokens = Record<`--${keyof ThemeCssVarsInterface | keyof CommonCssVarsInterface}`, string>;
type CssStoreState = {
    light: ThemeCssVarsInterface;
    dark: ThemeCssVarsInterface;
    common: CommonCssVarsInterface;
    tokens: DesignTokens;
};

const state = reactive<CssStoreState>({
    light: defaultThemeLightCss,
    dark: defaultThemeDarkCss,
    common: defaultCommonCss,
    tokens: {} as DesignTokens,
});

export function setLight(cssVars: Partial<ThemeCssVarsInterface>) {
    (
        Object.entries(cssVars) as Array<
            [keyof ThemeCssVarsInterface, ThemeCssVarsInterface[keyof ThemeCssVarsInterface] | undefined]
        >
    ).forEach(([key, value]) => {
        if (value === undefined) return;
        state.light[key] = value;
    });
}

export function setDark(cssVars: Partial<ThemeCssVarsInterface>) {
    (
        Object.entries(cssVars) as Array<
            [keyof ThemeCssVarsInterface, ThemeCssVarsInterface[keyof ThemeCssVarsInterface] | undefined]
        >
    ).forEach(([key, value]) => {
        if (value === undefined) return;
        state.dark[key] = value;
    });
}

export function setCommon(cssVars: Partial<CommonCssVarsInterface>) {
    (
        Object.entries(cssVars) as Array<
            [keyof CommonCssVarsInterface, CommonCssVarsInterface[keyof CommonCssVarsInterface] | undefined]
        >
    ).forEach(([key, value]) => {
        if (value === undefined) return;
        state.common[key] = value;
    });
}

export function setTokens(theme: ThemeMode = 'light') {
    const themeVars = theme === 'dark' ? state.dark : state.light;
    const tokens: DesignTokens = {} as DesignTokens;

    (
        Object.entries(themeVars) as Array<
            [keyof ThemeCssVarsInterface, ThemeCssVarsInterface[keyof ThemeCssVarsInterface]]
        >
    ).forEach(([key, value]) => {
        tokens[`--${key}`] = value;
    });

    (
        Object.entries(state.common) as Array<
            [keyof CommonCssVarsInterface, CommonCssVarsInterface[keyof CommonCssVarsInterface]]
        >
    ).forEach(([key, value]) => {
        tokens[`--${key}`] = String(value);
    });

    state.tokens = tokens;
}

export function setCssStore(theme: ThemeMode = 'light', css: NonNullable<LibraryConfigInterface['css']>) {
    if (css.light) {
        setLight(css.light);
    }
    if (css.dark) {
        setDark(css.dark);
    }
    if (css.common) {
        setCommon(css.common);
    }
    setTokens(theme);
}

export function getTokens() {
    return readonly(state.tokens);
}
