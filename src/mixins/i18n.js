export const i18n = {
    methods: {
        translate(StringId, opt) {
            var i18n = this.$store.state.i18n;
            if (StringId in i18n[i18n.selected]) 
                return i18n[i18n.selected][StringId];
            else if (StringId in i18n[i18n.default])
                return i18n[i18n.default][StringId];
            else
                return StringId;
        },
        getLanguages() {
            console.log('i18n.getLanguages()');

            const NotALangauge = ['default', 'selected'];
            var ret = [],
                self = this;
            Object.keys(this.$store.state.i18n).forEach ((value, index) => {
                if (!NotALangauge.includes(value)) {
                    ret.push({
                        key: value,
                        name: self.$store.state.i18n[value].NAME
                    });
                }
            });

            console.log(ret);
            return ret;
        },
        getSelectedLanguage() {
            var i18n = this.$store.state.i18n;
            return {
                id: i18n.selected,
                name: i18n[i18n.selected].NAME
            }
        }
    }
};