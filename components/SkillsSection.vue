<template>
  <slide scrollTrigger>
    <div class="skills" id="skills">
      <v-container>
        <SectionsTitle :title="$t('skills')" />
        <v-row>
          <v-col cols="6" sm="3" v-for="(skill, index) in skills" :key="index">
            <v-card elevation="0" class="pa-3 bg-background">
              <v-img
                :src="skill.img"
                width="50"
                height="50"
                class="skill mx-auto mb-2"
              ></v-img>
              <v-card-title class="text-subtitle-2 text-center words">{{
                skill.name
              }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </slide>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { skills } from "~/utils/skillsElements";
const { t } = useI18n();
</script>
<style scoped>
.skill {
  animation: rotate 6s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
