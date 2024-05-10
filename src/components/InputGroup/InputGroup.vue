<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    label: String,
    type: String,
    placeholder: String,
    customClasses: String,
    required: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <div :class="customClasses">
    <label class="mb-2.5 block text-black ">
      {{ label }}
      <span v-if="required" class="text-meta-1">*</span>
    </label>
    <input
        :placeholder="placeholder"
        :type="type"
        class="w-full rounded border-0 text-black border-stroke bg-slate-100 py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white "
    />
  </div>
</template>
