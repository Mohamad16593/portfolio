<template>
  <div
    class="footer w-100 px-3 d-flex flex-column flex-sm-row align-center justify-sm-space-between justify-center"
    style="color: transparent"
    calss="text-text"
  >
    <p class="text-subtitle-2 text-text">{{ t("socialNet") }}</p>
    <SocialLinks variant="text" />
    <p class="text-subtitle-2 text-text text-end">
      {{ `${new Date().getFullYear()}-${t("me")}` }}
    </p>
    <!-- <v-container>
      <v-row class="justify-sm-space-between justify-center align-center">
        <v-col cols="12" sm="4">
          <p class="text-subtitle-2 text-text">
            Get connected with social networks
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <SocialLinks variant="text" />
        </v-col>
        <v-col cols="12" sm="4">
          <p class="text-subtitle-2 text-text text-end">
            {{ new Date().getFullYear() }} - Mohamad Wakkaf
          </p>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style>
@media (min-width: 768px) {
  html[dir="rtl"] .footer {
    flex-direction: row-reverse !important;
  }
}
</style>
