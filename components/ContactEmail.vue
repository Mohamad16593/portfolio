<template>
  <v-locale-provider :rtl="$i18n.locale === 'ar'">
    <v-form ref="formRef" v-model="valid" lazy-validation class="pa-7">
      <p class="text-subtitle mb-6 text-primary text-center">
        {{ t("emailheader") }}
      </p>
      <v-text-field
        v-model="form.name"
        :label="$t('yourName')"
        color="primary"
        variant="outlined"
        :rules="[rules.required]"
        required
      />
      <v-text-field
        v-model="form.email"
        color="primary"
        variant="outlined"
        :label="$t('email')"
        class="my-6"
        :rules="[rules.required, rules.email]"
        required
      />
      <v-text-field
        v-model="form.subject"
        color="primary"
        variant="outlined"
        :label="$t('subject')"
        :rules="[rules.required]"
        required
      />
      <v-textarea
        v-model="form.message"
        color="primary"
        variant="outlined"
        class="my-6"
        :label="$t('message')"
        :rules="[rules.required]"
        required
      />
      <v-file-input
        v-model="form.attachment"
        color="primary"
        variant="outlined"
        :label="$t('attach')"
        multiple
        show-size
      />
      <v-btn
        :loading="loading"
        :disabled="!valid || loading"
        class="my-16 bg-primary d-block mx-auto w-25"
        @click="submit"
      >
        {{ t("send") }}
      </v-btn>
    </v-form>
  </v-locale-provider>

  <v-snackbar v-model="snackbar.show" :color="snackbar.color">
    {{ snackbar.text }}
    <template #actions>
      <v-btn text @click="snackbar.show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const formRef = ref();
const valid = ref(false);
const loading = ref(false);
const snackbar = reactive({ show: false, text: "", color: "" });

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
  attachment: [] as File[],
});

const rules = {
  required: (v: any) => !!v || t("require"),
  email: (v: string) => /.+@.+\..+/.test(v) || t("valid"),
};

async function submit() {
  if (!formRef.value.validate()) return;

  loading.value = true;
  const data = new FormData();
  data.append("name", form.name);
  data.append("email", form.email);
  data.append("subject", form.subject);
  data.append("message", form.message);
  form.attachment.forEach((file) => data.append("attachment", file, file.name));

  try {
    const res = await $fetch("/api/contact", {
      method: "POST",
      body: data,
    });
    snackbar.text = t("success");
    snackbar.color = "green";
    snackbar.show = true;
    formRef.value.reset();
  } catch (err) {
    snackbar.text = t("failed");
    snackbar.color = "red";
    snackbar.show = true;
  } finally {
    loading.value = false;
  }
}
</script>
