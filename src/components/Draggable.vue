<template>
  <div
    ref="draggable"
    class="draggable"
    :class="{
      dragging: refs.dragging
    }"
    :style="{ marginLeft: `calc(${-2 * refs.index}00% + ${refs.position}px` }"
    @touchstart="onDragStart($event)"
    @touchmove="onDrag($event)"
    @touchend="onDragEnd()"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import type { PropType } from 'vue';
import { emitter } from '@/main';
import { Direction } from '@/types';

export default defineComponent({
  name: 'Draggable',
  props: {
    direction: {
      // direction of dragging, 'X' or 'Y'
      type: String as PropType<Direction>,
      required: true,
      default: Direction.X
    },
    start: {
      // start position of dragging range, if none is specified, uses original position
      type: Number,
      required: false,
      default: null
    },
    end: {
      // end position of dragging range, if none is specified, uses original position
      type: Number,
      required: false,
      default: null
    },
    dampenStart: {
      // whether to dampen dragging beyond start point
      type: Boolean,
      required: false,
      default: false
    },
    dampenEnd: {
      // whether to dampen dragging beyond end point
      type: Boolean,
      required: false,
      default: false
    },
    stopStart: {
      // whether to prohibit dragging beyond start point
      type: Boolean,
      required: false,
      default: false
    },
    stopEnd: {
      // whether to prohibit dragging beyond end point
      type: Boolean,
      required: false,
      default: false
    },
    callbackPrefix: {
      // prefix for open and close events
      type: String,
      required: false,
      default: 'draggable'
    }
  },
  setup(props) {
    const draggable = ref<HTMLElement>();
    const refs = reactive({
      dragging: false,
      position: 0,
      index: 0
    });
    let dragStart = 0; // touch position at the start of drag
    let dragEnd = 0; // touch position at the end of drag
    let dragStartPerpendicular = 0; // touch position at the start of drag perpendicular to the dragging direction
    let dragEndPerpendicular = 0; // touch position at the end of drag perpendicular to the dragging direction
    let lastChange = 0; // last change in touch position
    let scrolling = false; // whether user is scrolling and dragging should be avoided
    const forcePoint = 200; // point where draggable is forced to stop at one side, even when dragging in the other direction

    onMounted(() => {
      emitter.on(`${props.callbackPrefix}-set-index`, i => (refs.index = i as number));
    });

    function onDragStart(event: TouchEvent) {
      const touch = getTouch(event);
      dragStart = dragEnd = touch[0];
      dragStartPerpendicular = dragEndPerpendicular = touch[1];
    }

    function onDrag(event: TouchEvent) {
      // update drag positions
      const touch = getTouch(event);
      dragEndPerpendicular = touch[1];
      lastChange = touch[0] - dragEnd;
      dragEnd = touch[0];

      // if user is not vertically dragging
      if (Math.abs(dragStartPerpendicular - dragEndPerpendicular) > 10 && Math.abs(dragStart - dragEnd) < 10) {
        scrolling = true;
        refs.position = 0;
      } else if (!scrolling && Math.abs(dragStart - dragEnd) > 10) {
        event.preventDefault(); // prevent vertical scrolling while dragging
        refs.dragging = true;
        refs.position = -dragEnd + dragStart;
        const dampener = 120;
        if (props.dampenEnd && refs.position > 0) {
          refs.position = (dampener * refs.position) / (refs.position + dampener);
        } else if (props.dampenStart && refs.position < 0) {
          refs.position = (-dampener * -refs.position) / (-refs.position + dampener);
        }
        if (props.stopEnd) {
          refs.position = Math.min(0, refs.position);
        } else if (props.stopStart) {
          refs.position = Math.max(0, refs.position);
        }
      }
    }

    function onDragEnd() {
      refs.dragging = false;
      scrolling = false;
      const dragDistance = dragEnd - dragStart;
      if (Math.abs(dragDistance) > forcePoint) {
        // dragged far enough to guarantee edge change
        if (dragDistance > 0 && !props.dampenStart) {
          shiftIndex(-1);
        } else if (dragDistance < 0 && !props.dampenEnd) {
          shiftIndex(1);
        }
      } else if (Math.abs(dragDistance) > 40) {
        // dragged far enough to flip in the last change direction
        if (lastChange > 0 && !props.dampenStart) {
          shiftIndex(-1);
        } else if (lastChange < 0 && !props.dampenEnd) {
          shiftIndex(1);
        }
      }
      refs.position = 0;
    }

    function shiftIndex(n: number) {
      refs.position = 0;
      refs.index += n;
      emitter.emit(`${props.callbackPrefix}-${n > 0 ? 'end' : 'start'}`);
    }

    function getTouch(event: TouchEvent): number[] {
      const touch = event.targetTouches[0];
      return props.direction === Direction.X ? [touch.clientX * -1, touch.clientY] : [touch.clientY, touch.clientX * -1];
    }

    return {
      Direction,
      draggable,
      refs,
      onDragStart,
      onDrag,
      onDragEnd
    };
  }
});
</script>

<style lang="scss" scoped>
.draggable {
  transition-duration: $draggable-transition-duration;
  transition-timing-function: $draggable-transition-timing;
  transition-property: margin-left, margin-bottom;

  &.dragging {
    transition: none;
  }
}
</style>
