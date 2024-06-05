import { defineStore } from 'pinia';

export default defineStore('loadingPinia', {
    state: () => ({
        isLoading: false,
        fullPage: true,
    }),
    actions: {
        piniaLoadingFn() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 550);
        },
    },
})