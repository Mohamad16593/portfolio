<template>
  <slide>
    <v-container class="mt-4">
      <v-row class="my-10">
        <v-col cols="12" md="5" align="center" justify="center">
          <v-img
            src="https://github.com/Mohamad16593.png"
            style="border-radius: 0 50% 0 50%"
            width="250"
            height="250"
            class="personal-img mb-2"
          ></v-img>
        </v-col>
        <v-col cols="12" md="7" align="center">
          <h2 class="words text-red d-block">
            {{ t("greeting") }}
          </h2>
          <h1 class="words text-red font-weight-bold d-block">
            {{ t("me") }}
          </h1>
          <h3 class="d-block">{{ t("job") }}</h3>

          <social-links variant="plain" />
          <v-locale-provider :rtl="$i18n.locale === 'ar'"
            ><p class="words text-h5 font-weight-bold d-block">
              {{ `${new Date().getFullYear() - 2023} ${t("experience")}` }}
            </p></v-locale-provider
          >

          <p class="words text-subtitle font-weight-bold d-block">
            {{ t("see") }}
          </p>

          <v-icon
            ref="arrowIcon"
            icon="mdi-arrow-down"
            class="d-block"
            size="20"
            color="primary"
          />
          <v-btn
            class="mt-3 font-weight-bold"
            :href="'/cv.pdf'"
            download="Mohamad Wakkaf CV"
            target="_blank"
            style="cursor: pointer"
            variant="outlined"
            color="primary"
            append-icon="mdi-download"
            >{{ t("cv") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </slide>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import gsap from "gsap";

const arrowIcon = ref(null);

onMounted(() => {
  gsap.to(arrowIcon.value.$el, {
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 0.8,
  });
});
</script>
<style scoped>
.personal-img {
  border: 3px solid #fff;
  outline: 3px solid rgb(197, 202, 255);
  filter: opacity(0.7);
  box-shadow: rgb(16, 4, 49) 10px 9px 8px;
}
</style>
