<template>
  <renderless-option
    :id="id"
    :display="display"
    :selected="selected"
    v-bind="$attrs"
  >
    <div class="flex">
      <component
        :is="ConditionComponent"
        :id="id"
      >
        <slot></slot>
      </component>
    </div>
  </renderless-option>
</template>

<script>
 import RenderlessOption from '../../../../components/renderless/renderless-option';
 import { optionProps } from '../../../../mixins';

 export default {
   mixins: [optionProps],
   props: {
     ConditionComponent: {
       type: Object,
       required: false,
     },
   },
   components: {
     RenderlessOption,
   },
 };
</script>
