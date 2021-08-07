<template>
  <polygon
    id="Triangle"
    class="cls-1"
    points="55.29 47.8 52.6 60.22 64.7 56.35 55.29 47.8"
  /><circle id="Circle" class="cls-2" cx="64.5" cy="37.55" r="5" /><circle
    id="Circle-2"
    class="cls-3"
    cx="64.7"
    cy="153.48"
    r="5"
  /><polygon
    id="Triangle-2"
    class="cls-2"
    points="230.86 140.5 227.67 128.2 218.61 137.11 230.86 140.5"
  /><polygon
    id="Triangle-3"
    class="cls-3"
    points="217.47 40.59 212.29 52.19 224.93 50.88 217.47 40.59"
  /><circle id="Circle-3" class="cls-1" cx="229.74" cy="153.9" r="5" />
</template>

<script>
export default {
  name: 'GraphicsMobile' + 'Design'
};
</script>

<style lang="scss" scoped>
.cls-1,
.cls-2,
.cls-3 {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  isolation: isolate;
}
.cls-1 {
  opacity: 0.8;
}
.cls-2 {
  opacity: 0.6;
}
.cls-3 {
  opacity: 0.6;
}
</style>
