<template>
  <slide scrollTrigger>
    <div class="projects mt-16" id="projects">
      <SectionsTitle :title="$t('proj')" />
      <v-locale-provider :rtl="$i18n.locale === 'ar'">
        <v-container>
          <v-row>
            <v-col cols="12" v-for="(project, index) in projects" :key="index">
              <v-row class="my-4 pb-12" style="border-bottom: 1px solid #eee">
                <v-col
                  cols="12"
                  sm="6"
                  :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                  :order="index % 2 === 0 ? 1 : 2"
                >
                  <h3 class="words mb-3">{{ project.title }}</h3>
                  <p class="words mb-3">{{ project.description }}</p>
                  <div class="mb-3">
                    <h5 class="words mb-1">Used Techniques :</h5>
                    <v-chip-group class="text-primary" column>
                      <v-chip
                        v-for="(tech, i) in project.techniques"
                        class="words"
                        :key="i"
                        >{{ tech }}</v-chip
                      >
                    </v-chip-group>
                  </div>
                  <a
                    :href="project.link"
                    target="_blank"
                    class="text-primary font-weight-bold words"
                    >{{ t("visit") }}</a
                  >
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  align="center"
                  :order="index % 2 === 0 ? 2 : 1"
                >
                  <v-img
                    class="project-img"
                    :src="project.image"
                    width="250"
                    height="250"
                    cover
                    rounded="lg"
                  >
                  </v-img>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" class="mt-8" align="center">
              <h3 class="text-primary words">"{{ t("resp") }}"</h3>
            </v-col>
          </v-row>
        </v-container>
      </v-locale-provider>
    </div>
  </slide>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import chefs from "@/assets/images/projectsImags/43.JPG";
import ella from "@/assets/images/projectsImags/3.JPG";
import dash from "@/assets/images/projectsImags/33.JPG";
import kasper from "@/assets/images/projectsImags/24.JPG";
import luxe from "@/assets/images/projectsImags/9.JPG";
import portfolio from "@/assets/images/projectsImags/portfolio.JPG";

const { t, locale } = useI18n();
const projects = [
  {
    title: t("kitchen"),
    description: t("chefs"),
    image: chefs,
    techniques: ["Nuxt", "Vue", "Vuetify", "Gsap", "API", "Swiper", "Pinia"],
    link: "https://chefs-kitchen-two.vercel.app/",
  },
  {
    title: t("ecom"),
    description: t("ella"),
    image: ella,
    techniques: ["Vue", "Vuetify", "API", "Swiper", "Pinia"],
    link: "https://mohamad16593.github.io/e-commerce-ella/",
  },
  {
    title: t("myport"),
    description: t("portfolio"),
    image: portfolio,
    techniques: ["Vue", "Vuetify", "Gsap"],
    link: "https://mohamad16593.github.io/profile/",
  },
  {
    title: t("dboard"),
    description: t("dash"),
    image: dash,
    techniques: ["HTML", "CSS"],
    link: "https://mohamad16593.github.io/Dashboard/",
  },
  {
    title: t("kasp"),
    description: t("kasper"),
    image: kasper,
    techniques: ["HTML", "CSS", "JavaScript"],
    link: "https://mohamad16593.github.io/Kasper-website/",
  },
  {
    title: t("luxstate"),
    description: t("luxe"),
    image: luxe,
    techniques: ["HTML", "CSS", "JavaScript"],
    link: "https://mohamad16593.github.io/Lux/",
  },
];
</script>

<style scoped>
.project-img {
  transform: rotate(5deg);
  box-shadow: 9px 9px 17px rgb(231, 70, 47);
}
@media (max-width: 600px) {
  .project-img {
    display: none;
  }
}
</style>
