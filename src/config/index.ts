import { setConfig, setCssStore, setTokens } from '@/stores';

import '@/stores';

import type { LibraryConfigInterface, ThemeMode } from '@/common/interfaces';

export function init(config?: LibraryConfigInterface) {
    console.log('[Virtualsoft Widgets] Initializing with config:', config);

    if (!config) {
        setTokens();
        return;
    }

    const { css, ...restConfig } = config;

    setConfig(restConfig);

    if (css) {
        setCssStore(restConfig.themeMode, css);
    }
}

export function changeTheme(theme: ThemeMode) {
    setTokens(theme);
}
