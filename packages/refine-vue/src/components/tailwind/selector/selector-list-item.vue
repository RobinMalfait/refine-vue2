<template>
  <li
    role="option"
    class="refine-selector-list-item"
    :class="{'refine-selector-list-item-highlighted': isHighlighted }"
    :key="optionId"
    ref="listItem"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @click="$emit('selected')"
    :aria-label="optionDisplay"
    :aria-selected="selected"
  >
    <span
      class="refine-selector-list-item-text"
      :class="{ 'refine-selector-list-item-text-selected': selected }"
    >
      {{ optionDisplay }}
    </span>

    <span
      :class="{ 'refine-selector-list-item-icon-wrapper-highlighted': !isHighlighted }"
      class="refine-selector-list-item-icon-wrapper"
    >
      <!-- Heroicon name: check -->
      <svg
        v-show="selected"
        class="refine-selector-list-item-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :aria-hidden="!selected"
      >
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </span>
  </li>
</template>

<script>
 export default {
   name: 'selector-list-item',
   props: {
     optionId: {
       type: [String, Number],
       required: true,
     },
     optionDisplay: {
       type: String,
       required: true,
     },
     selected: {
       type: Boolean,
       required: false,
       default: false,
     },
     isHighlighted: {
       type: Boolean,
       required: false,
       default: false,
     },
   },
   emits: ['selected', 'mouseenter', 'mouseleave'],
   methods: {
     scrollIntoView: function() {
       this.$refs.listItem.scrollIntoView(false);
     },
   },
 };
</script>
