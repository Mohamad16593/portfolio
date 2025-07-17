<template>
  <slide scrollTrigger>
    <div class="faq mx-5 mb-16" id="faq">
      <SectionsTitle :title="$t('faqtitle')" />
      <v-locale-provider :rtl="$i18n.locale === 'ar'">
        <v-expansion-panels multiple>
          <v-expansion-panel
            v-for="(item, i) in faqs"
            :key="i"
            elevation="0"
            variant="accordion"
          >
            <v-expansion-panel-title class="words"
              >{{ item.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>{{ item.answer }} </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-locale-provider>
      <div class="text-primary text-center mt-10">
        <h2 class="mb-4 words">{{ t("another") }}</h2>
        <p class="words">
          {{ t("contact") }}
          <span
            @click="dialog = !dialog"
            style="cursor: pointer; text-decoration: underline"
            class="font-weight-bold"
            >{{ t("email") }}</span
          >
        </p>
      </div>
      <v-dialog
        v-model="dialog"
        max-width="400px"
        transition="dialog-top-transition"
        persistent
      >
        <v-card elevation="0" class="bg-background">
          <v-icon size="36" color="primary" class="ma-4" @click="dialog = false"
            >mdi-close</v-icon
          >
          <ContactEmail />
        </v-card>
      </v-dialog>
    </div>
  </slide>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const dialog = ref(false);

const { t, tm, locale } = useI18n();
const rawFaqs = tm("faq.items");
const faqs = rawFaqs.map((item) => ({
  question: item.question.body?.static,
  answer: item.answer.body?.static,
}));
</script>
