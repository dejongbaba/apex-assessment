<script setup>

const props = defineProps(['label', 'placeholder', 'type', 'customClasses', 'required'])
const model = defineModel()

console.log('model', model.value)

</script>

<template>
  <div :class="customClasses">
    <label class="mb-2.5 block text-black ">
      {{ label }}
      <span v-if="required" class="text-meta-1">*</span>
    </label>
    <input v-model="model"
           :placeholder="placeholder"
           :type="type"
           class="w-full rounded border-0 text-black border-stroke bg-slate-100 py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default "
    />
  </div>
</template>
