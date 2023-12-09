import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		icons: {
			defaultSet: "mdi",
			aliases,
			sets: {
				mdi,
			},
		},
	});
	app.vueApp.use(vuetify);
});
