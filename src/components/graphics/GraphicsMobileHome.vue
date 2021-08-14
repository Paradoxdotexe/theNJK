<template>
  <polygon
    id="Triangle"
    class="cls-1"
    points="224.02 157.56 215.74 167.2 228.23 169.55 224.02 157.56"
  /><circle id="Circle" class="cls-2" cx="235.35" cy="152.59" r="5" /><circle
    id="Circle-2"
    class="cls-1"
    cx="235.35"
    cy="21.58"
    r="5"
  /><polygon
    id="Triangle-2"
    class="cls-2"
    points="70.47 40.87 62.16 31.25 57.99 43.25 70.47 40.87"
  /><polygon
    id="Triangle-3"
    class="cls-1"
    points="47.52 164.77 42.34 176.37 54.97 175.06 47.52 164.77"
  /><circle id="Circle-3" class="cls-1" cx="48.66" cy="29.96" r="5" />
</template>

<script>
export default {
  name: 'GraphicsMobile' + 'Home'
};
</script>

<style lang="scss" scoped>
.cls-1,
.cls-2 {
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
</style>
