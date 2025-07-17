<template>
  <div ref="sectionEl" class="section">
    <slot></slot>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  scrollTrigger: { type: Boolean, default: false },
});

const sectionEl = ref(null);
onMounted(async () => {
  const tl = gsap.timeline();

  const animateContent = () => {
    tl.from(sectionEl.value, {
      opacity: 0,
      x: "-100%",
      duration: 1,
      ease: "power1.out",
    });
    tl.from(
      sectionEl.value.querySelectorAll(".words"),
      {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      },
      "+=0.2"
    );
  };
  if (props.scrollTrigger) {
    ScrollTrigger.create({
      trigger: sectionEl.value,
      start: "top 80%",
      once: true,
      onEnter: animateContent,
    });
  } else {
    animateContent();
  }
});
</script>
