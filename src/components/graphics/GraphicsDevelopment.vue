<template>
  <polygon
    id="Triangle"
    class="cls-1"
    points="228.41 70.56 223.83 95.55 247.76 87.02 228.41 70.56"
  />
  <circle id="Circle" class="cls-2" cx="248.9" cy="50.44" r="10" />
  <circle id="Circle-2" data-name="Circle" class="cls-3" cx="330.39" cy="325.14" r="10" />
  <polygon
    id="Triangle-2"
    data-name="Triangle"
    class="cls-2"
    points="917.75 355.48 900.48 336.85 892.98 361.12 917.75 355.48"
  />
  <polygon
    id="Triangle-3"
    data-name="Triangle"
    class="cls-3"
    points="958.8 49.32 948.44 72.51 973.7 69.89 958.8 49.32"
  />
  <circle id="Circle-3" data-name="Circle" class="cls-1" cx="873.4" cy="335.21" r="10" />
</template>

<script>
export default {
  name: 'Graphics' + 'Development'
};
</script>

<style lang="scss" scoped>
.cls-1,
.cls-2,
.cls-3 {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
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
