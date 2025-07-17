<template>
  <slide scrollTrigger>
    <div class="about my-16 px-5" id="about">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" align="center">
            <SectionsTitle :title="$t('about')" />
            <p class="words text-subtitle text-center text-sm-left">
              {{ t("aboutText") }}
            </p>
          </v-col>
          <v-col cols="12" md="6" align="center">
            <SectionsTitle :title="$t('exper')" />
            <div class="text-subtitle" style="line-height: 1.9">
              <p class="words">{{ t("exp1") }}</p>
              <p class="words">{{ t("exp2") }}</p>
              <p class="words">{{ t("exp3") }}</p>
              <p class="words">{{ t("exp4") }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </slide>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
