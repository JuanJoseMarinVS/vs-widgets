import { reactive, readonly } from 'vue';

import type { LibraryConfigInterface } from '@/common/interfaces';

type StoredConfig = Omit<LibraryConfigInterface, 'css'>;

type ConfigState = {
    config: Partial<StoredConfig>;
};

const state = reactive<ConfigState>({
    config: {
        themeMode: 'light',
    },
});

export function setConfig(newConfig: StoredConfig) {
    state.config = {
        ...state.config,
        ...newConfig,
    };
}

export function getConfig(): Partial<StoredConfig> {
    return readonly(state.config);
}
