export default defineAppConfig({
    ui: {
        primary: 'lime',
        gray: 'zinc',

        accordion: {
            default: {
                class: 'w-full',
            }
        },
        modal: {
            container: 'flex min-h-full sm:items-center items-start justify-center text-center',
        },
        button: {
            default: {
                size: 'xl',
            },
        },
    }
});