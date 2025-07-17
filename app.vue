<template>
  <div>
    <Preloader v-if="loading" />
    <NuxtLayout
      :class="locale === 'ar' ? 'font-ar' : 'font-en'"
      class="layout-background"
    >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Mohamad Wakkaf",
  ogTitle: "Mohamad Wakkaf",
  description:
    "Welcom to my portfolio ,I'm frontend Nuxt developer and i will be happy to work with you",
  ogDescription:
    "Welcom to my portfolio ,I'm frontend Nuxt developer and i will be happy to work with you",
});

import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const htmlDir = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
const htmlLang = computed(() => locale.value);
useHead({
  htmlAttrs: {
    dir: htmlDir,
    lang: htmlLang,
  },
});

const loading = ref(true);
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<style>
html[dir="rtl"] body {
  text-align: right;
  direction: rtl;
}

html[dir="ltr"] body {
  text-align: left;
  direction: ltr;
}
.layout-background {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
</style>
