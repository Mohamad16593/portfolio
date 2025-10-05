<template>
  <div class="loader-screen">
    <div class="loader-text" dir="ltr">
      <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span
      ><span>N</span><span>G</span>
    </div>
  </div>
</template>

<style scoped>
/* Preloader.css */
.loader-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #fffefeff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-text {
  font-family: "Segoe UI", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #e7462f; /* Tailwind orange for pop */
  display: flex;
}

.loader-text span {
  display: inline-block;
  animation: pulseLetter 1.2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
}

/* Delay for each letter */
.loader-text span:nth-child(1) {
  --i: 0;
}
.loader-text span:nth-child(2) {
  --i: 1;
}
.loader-text span:nth-child(3) {
  --i: 2;
}
.loader-text span:nth-child(4) {
  --i: 3;
}
.loader-text span:nth-child(5) {
  --i: 4;
}
.loader-text span:nth-child(6) {
  --i: 5;
}
.loader-text span:nth-child(7) {
  --i: 6;
}

@keyframes pulseLetter {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
