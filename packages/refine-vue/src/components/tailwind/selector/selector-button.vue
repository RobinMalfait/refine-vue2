<template>
  <button
    :id="id"
    type="button"
    aria-haspopup="listbox"
    :aria-expanded="isOpen"
    :aria-label="label()"
    class="refine-selector-button"
    ref="button"
    @click.prevent="$emit('toggle')"
    @keydown.arrow-down.stop.prevent="$emit('open')"
  >
    <span 
      class="refine-selector-button-placeholder"
      v-if="display.length === 0"
    >
      Choose an option
    </span>
    <span 
      class="refine-selector-button-selected"
      v-else
    >
      {{  display }}
    </span>
    <span class="refine-selector-button-icon-wrapper">
      <!-- Heroicon name: selector -->
      <svg class="refine-selector-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </span>
  </button>
</template>

<script>
 export default {
   name: 'selector-button',
   props: {
     id: {
       type: String,
       required: true,
     },
     isOpen: {
       type: Boolean,
       required: true,
     },
     display: {
       type: String,
       required: true,
     },
   },
   methods: {
     label: function() {
      return this.display ? `${this.display} Selected` : 'Choose an option'
     },
     focus: function() {
       this.$refs.button.focus();
     },
   },
 }
</script>
