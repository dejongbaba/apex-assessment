<script lang="ts" setup>
import {defineProps, ref} from 'vue'

const selectedOption = ref<string>('')
const isOptionSelected = ref<boolean>(false)
const props = defineProps(['label', 'options', 'cus'])
const changeTextColor = () => {
  isOptionSelected.value = true
}
</script>

<template>
  <div class="w-full mb-4.5">
    <label class="mb-2.5 block text-black dark:text-white"> {{ label }} </label>

    <div class="relative z-20  ">
      <select
          v-model="selectedOption"
          :class="{ 'text-black dark:text-white': isOptionSelected }"
          class="relative z-20 w-full appearance-none rounded border-0 bg-slate-100 py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          @change="changeTextColor"
      >
        <option disabled selected value="">Type your subject</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
    </div>
  </div>
</template>
