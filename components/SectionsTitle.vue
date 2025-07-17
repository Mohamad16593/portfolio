<template>
  <div
    :class="['position-relative', 'title-container', customClass]"
    :style="dynamicStyle"
  >
    <h2
      class="title text-primary font-weight-bold text-center my-10"
      style="letter-spacing: 2px"
    >
      {{ title }}
    </h2>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  customClass: {
    type: String,
    default: "",
  },
});
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const dynamicStyle = computed(() => {
  return locale.value === "ar"
    ? {
        direction: "rtl",
        fontFamily: '"Cairo", sans-serif',
      }
    : {
        direction: "ltr",
        fontFamily: '"Open Sans", sans-serif',
      };
});
</script>
<style>
.title::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  background-color: #e7462f;
  bottom: 0px;
  display: block;
  transition: all 0.5s linear;
}

.title-container:hover .title::before {
  width: 100%;
}
</style>
