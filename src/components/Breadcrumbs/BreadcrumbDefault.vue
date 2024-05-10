<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps(['onPayDues', 'onSetActive'])
</script>

<template>
  <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <nav>
      <ul class='flex gap-4' @:onclick="onSetActive">
        <li class='text-secondary font-light text-base active:border-b active:border-b-primary' @click="">All</li>
        <li class='text-secondary font-light text-base' @click="">Paid</li>
        <li class='text-secondary font-light text-base' @click="">Unpaid</li>
        <li class='text-secondary font-light text-base' @click="">Overdue</li>
      </ul>
    </nav>

    <div>
      <button class='rounded-xl px-12 py-3 text-center bg-primary hover:bg-opacity-90 text-white font-bold '
              @click="onPayDues">Pay
        Dues
      </button>
    </div>
  </div>
</template>
