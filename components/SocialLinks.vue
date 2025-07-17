<template>
  <div class="d-flex align-center justify-center my-4 ga-4">
    <v-btn
      v-for="(icon, index) in socials"
      :key="icon.name"
      :href="icon.url"
      target="_blank"
      :color="icon.color"
      :variant="variant"
      icon
      size="30"
      elevation="0"
      :ref="(el) => (iconRefs[index] = el)"
    >
      <v-icon size="30">{{ icon.icon }}</v-icon>
    </v-btn>
  </div>
</template>
<script setup>
import { socials } from "~/utils/socialElements";
defineProps({
  variant: { type: String },
});
import gsap from "gsap";

const iconRefs = ref([]);
onMounted(() => {
  iconRefs.value.forEach((el, i) => {
    if (el?.$el) {
      gsap.to(el.$el, {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 1.5 + i * 0.4,
        ease: "sine.inOut",
      });
    }
  });
});
</script>
