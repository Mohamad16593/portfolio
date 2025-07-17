import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // Themes
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#e7462f",
            background: "#fffefeff",
            text: "#111010ff",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#e7462f",
            background: "#111010ff",
            text: "#d1cdcdff",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
