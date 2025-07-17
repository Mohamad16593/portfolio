<template>
  <v-app-bar
    collapse-on-scroll
    app
    :style="
      isDark
        ? 'background-color: rgb(17 16 16 / 60%);'
        : 'background-color: rgb(255 254 254 / 60%);'
    "
    style="backdrop-filter: blur(5px)"
    calss=" text-text"
    elevation="0"
    width="50%"
    rounded="xl"
  >
    <v-container>
      <div
        class="d-flex justify-space-between ga-2 align-center app-bar-content"
      >
        <div style="width: 50px; height: 50px" ref="mw" class="icon">
          <client-only>
            <svg
              class="mw"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
              :style="{ fill: $vuetify.theme.current.colors.primary }"
              viewBox="0 0 1024.000000 1024.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M6243 8102 c-73 -87 -161 -189 -195 -227 -55 -62 -193 -221 -833
        -959 -596 -688 -763 -876 -777 -876 -4 0 -8 8 -8 19 0 10 -45 251 -100 536
        -55 284 -100 519 -100 521 0 2 -191 4 -424 4 l-424 0 -52 -142 c-73 -197
        -1113 -2970 -1139 -3036 -12 -29 -21 -55 -21 -57 0 -3 171 -5 380 -5 l380 0
        10 23 c5 12 129 337 275 722 146 385 327 862 403 1059 l137 359 16 -79 c9 -43
        66 -326 128 -629 62 -302 115 -566 119 -585 l8 -35 352 349 c194 192 352 344
        352 338 0 -5 -9 -32 -21 -59 -28 -64 -113 -285 -266 -688 -206 -546 -427
        -1118 -511 -1325 -43 -107 -137 -337 -207 -510 -155 -381 -194 -480 -190 -480
        3 0 67 78 520 640 176 217 511 631 745 920 234 289 491 605 570 703 129 160
        145 176 151 155 9 -27 32 -284 54 -593 9 -121 18 -235 21 -252 l5 -33 353 0
        353 0 51 108 c28 59 258 530 512 1047 656 1333 1020 2077 1020 2081 0 3 -174
        3 -386 2 l-385 -3 -133 -260 c-597 -1175 -869 -1705 -871 -1703 -5 5 -34 483
        -40 663 -3 88 -8 183 -11 212 l-5 52 -407 -349 c-224 -191 -408 -347 -410
        -346 -4 5 59 173 183 486 64 162 179 457 256 655 151 387 321 810 553 1374 80
        195 144 356 143 357 -1 1 -62 -68 -134 -154z"
                />
              </g>
            </svg>
          </client-only>
        </div>

        <div class="d-flex align-center justify-center">
          <!-- light/dark mode -->
          <v-btn icon @click="toggleTheme">
            <v-icon color="primary" size="30">{{
              isDark ? "mdi-white-balance-sunny" : "mdi-moon-waning-crescent"
            }}</v-icon>
          </v-btn>

          <!-- language change button -->
          <v-menu>
            <template #activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon color="primary" size="30" class="lang"
                  >mdi-translate</v-icon
                >
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="locale in locales"
                :key="locale.code"
                @click="changeLocale(locale.code)"
              >
                <v-list-item-title>{{ locale.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";
import { gsap } from "gsap";

const mw = ref(null);
const siteTheme = ref(null);

const theme = useTheme();
const isDark = computed(() => theme.global.name.value === "dark");
const toggleTheme = () => {
  theme.global.name.value = isDark.value ? "light" : "dark";
};

const { locales, setLocale, t } = useI18n();
const changeLocale = (code) => {
  setLocale(code);
};

onMounted(() => {
  gsap.to(mw.value, {
    rotationY: 360,
    repeat: -1,
    duration: 10,
    ease: "none",
    transformPerspective: 800,
    transformOrigin: "center center",
  });
});
</script>
<style scoped>
html[dir="rtl"] .app-bar-content {
  flex-direction: row-reverse !important;
}
.icon {
  width: 100px;
  height: 100px;
  perspective: 800px;
  display: inline-block;
}
.icon svg {
  width: 100%;
  transform-style: preserve-3d;
}
</style>
