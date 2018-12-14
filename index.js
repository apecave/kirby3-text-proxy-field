panel.plugin('apecave/kirby3-text-proxy-field', {
    'fields': {
        'text-proxy': {
            props: {
                placeholder: String,
                value: String,
                label: String,
                name: String,
            },

            methods: {
                input() {
                    this.$emit("input", this.value);
                }
            },

            template: '<k-text-field v-model="value" :label="label" :name="name" :placeholder="placeholder" @input="input"/>',

        }
    }
});