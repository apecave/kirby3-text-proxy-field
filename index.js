panel.plugin('apecave/kirby3-text-proxy-field', {
    'fields': {
        'text-proxy': {
            props: {
                placeholder: String,
                value: String,
                label: String,
                name: String,
                help: String,
                maxlength: Number,
                minlength: Number
            },

            methods: {
                input() {
                    this.$emit("input", this.value);
                }
            },

            template: '<k-text-field v-model="value" :label="label" :name="name" :maxlength="maxlength" :minlength="minlength" :help="help" :placeholder="placeholder" @input="input"/>',

        },
        'textarea-proxy': {
            props: {
                placeholder: String,
                value: String,
                label: String,
                name: String,
                help: String,
                maxlength: Number,
                minlength: Number
            },

            methods: {
                input() {
                    this.$emit("input", this.value);
                }
            },

            template: '<k-textarea-field v-model="value" :label="label" :name="name" :maxlength="maxlength" :minlength="minlength" :help="help" :placeholder="placeholder" @input="input"/>',

        }
    }
});