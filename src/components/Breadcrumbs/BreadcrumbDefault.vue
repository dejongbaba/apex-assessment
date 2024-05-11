<script lang="ts" setup>
import {defineProps, ref} from "vue";

const props = defineProps(['onPayDues', 'onTabPress'])

let active = ref('all')

const onSetActive = (val) => {
  console.log('log clicked', val)
  active.value = val
  if (val == 'all') {
    props.onTabPress('')
  } else {
    props.onTabPress(val)
  }
}

console.log('active', active.value)
</script>
<!--
tab would emit actions
that

-->

<template>
  <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <nav>
      <ul class='flex gap-4'>
        <li :class="active.value==='all'?'border-b-3 border-b-primary' :''" class='text-secondary font-light text-base'
            @click="onSetActive('all')">
          All
        </li>
        <li :class="active.value==='paid'?'border-b-3 border-b-primary' :''" class='text-secondary font-light text-base'
            @click="onSetActive('paid')">Paid
        </li>
        <li :class="active.value==='unpaid'?'border-b-3 border-b-primary' :''"
            class='text-secondary font-light text-base'
            @click="onSetActive('unpaid')">Unpaid
        </li>
        <li :class="active.value==='overdue'?'border-b-3 border-b-primary' :''"
            class='text-secondary font-light text-base'
            @click="onSetActive('overdue')">Overdue
        </li>
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
