<script setup>
import {defineProps, ref} from 'vue'

const isOptionSelected = ref(false)
const props = defineProps(['label', 'options', 'cus'])
const model = defineModel()

console.log('select', model.value)
</script>

<template>
  <div class="w-full mb-4.5">
    <label class="mb-2.5 block text-black "> {{ label }} </label>

    <div class="relative z-20">
      <select
          v-model="model"
          class="relative z-20 w-full appearance-none rounded border-0 bg-slate-100 py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">

        <!--        <option disabled selected value="">Type your subject</option>-->
        <option v-for="option in options" :value="option" class='bg-white px-4 py-3'>{{ option }}</option>
        <!--        <option value="USA">USA</option>-->
        <!--        <option value="UK">UK</option>-->
        <!--        <option value="Canada">Canada</option>-->
      </select>
    </div>
  </div>
</template>
