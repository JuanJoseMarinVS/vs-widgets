export type ThemeMode = 'light' | 'dark';

export interface ThemeCssVarsInterface {
    'color-brand': string;
    'color-brand-focus': string;
    'color-brand-content': string;
    'color-brand-soft': string;
    'color-secondary': string;
    'color-secondary-focus': string;
    'color-secondary-content': string;
    'color-secondary-soft': string;
    'color-accent': string;
    'color-accent-focus': string;
    'color-accent-content': string;
    'color-accent-soft': string;
    'color-neutral': string;
    'color-neutral-focus': string;
    'color-neutral-content': string;
    'color-neutral-soft': string;
    'color-base-100': string;
    'color-base-200': string;
    'color-base-300': string;
    'color-base-400': string;
    'color-base-content': string;
    'color-info': string;
    'color-info-focus': string;
    'color-info-content': string;
    'color-info-soft': string;
    'color-success': string;
    'color-success-focus': string;
    'color-success-content': string;
    'color-success-soft': string;
    'color-warning': string;
    'color-warning-focus': string;
    'color-warning-content': string;
    'color-warning-soft': string;
    'color-error': string;
    'color-error-focus': string;
    'color-error-content': string;
    'color-error-soft': string;
}

export interface CommonCssVarsInterface {
    // container padding
    'space-container-padding-xs': number;
    'space-container-padding-sm': number;
    'space-container-padding-md': number;
    'space-container-padding-lg': number;
    'space-container-padding-xl': number;

    // interactive padding
    'space-interactive-padding-x-sm': number;
    'space-interactive-padding-y-sm': number;
    'space-interactive-padding-x-md': number;
    'space-interactive-padding-y-md': number;
    'space-interactive-padding-x-lg': number;
    'space-interactive-padding-y-lg': number;
    'space-interactive-padding-x-xl': number;
    'space-interactive-padding-y-xl': number;

    // container gap
    'space-container-gap-xxs': number;
    'space-container-gap-xs': number;
    'space-container-gap-sm': number;
    'space-container-gap-md': number;
    'space-container-gap-lg': number;
    'space-container-gap-xl': number;

    // interactive gap
    'space-interactive-gap-sm': number;
    'space-interactive-gap-md': number;
    'space-interactive-gap-lg': number;
    'space-interactive-gap-xl': number;

    // container radius
    'shape-container-radius-none': number;
    'shape-container-radius-xs': number;
    'shape-container-radius-sm': number;
    'shape-container-radius-md': number;
    'shape-container-radius-lg': number;
    'shape-container-radius-xl': number;

    // interactive radius
    'shape-interactive-radius-none': number;
    'shape-interactive-radius-sm': number;
    'shape-interactive-radius-md': number;
    'shape-interactive-radius-full': number;

    // border widths
    'border-width-none': number;
    'border-width-hairline': number;
    'border-width-default': number;
    'border-width-thick': number;
    'border-width-heavy': number;
}

export interface LibraryConfigInterface {
    css?: {
        common?: Partial<CommonCssVarsInterface>;
        light?: Partial<ThemeCssVarsInterface>;
        dark?: Partial<ThemeCssVarsInterface>;
    };
    themeMode?: ThemeMode;
}
