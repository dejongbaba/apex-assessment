<script lang="ts" setup>
import {defineProps, reactive} from "vue";

const props = defineProps(['onPayDues', 'onTabPress'])

let state = reactive({active: 'all'})

const onSetActive = (val) => {
  console.log('log clicked', val)
  state.active = val
  if (val == 'all') {
    props.onTabPress('')
  } else {
    props.onTabPress(val)
  }
}

console.log('active', state.active)
</script>
<!--
tab would emit actions
that

-->

<template>
  <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <nav>
      <div class='flex gap-4'>
        <button :class="state.active==='all'?'  border-primary' :'border-transparent'"
                class='text-secondary py-3 border-b-4 cursor-pointer font-light text-base'
                @click="onSetActive('all')">
          All
        </button>
        <button :class="state.active==='paid'?' border-primary' :'border-transparent'"
                class='text-secondary py-3  border-b-4 cursor-pointer font-light text-base'
                @click="onSetActive('paid')">Paid
        </button>
        <button :class="state.active==='unpaid'?' border-primary' :'border-transparent'"
                class='text-secondary cursor-pointer border-b-4 font-light text-base py-3'
                @click="onSetActive('unpaid')">Unpaid
        </button>
        <button :class="state.active==='overdue'?' border-primary' :'border-transparent'"
                class='text-secondary cursor-pointer border-b-4 font-light text-base py-3'
                @click="onSetActive('overdue')">Overdue
        </button>
      </div>
    </nav>

    <div>
      <button class='rounded-xl px-12 py-3 text-center bg-primary hover:bg-opacity-90 text-white font-bold '
              @click="onPayDues">Pay
        Dues
      </button>
    </div>
  </div>
</template>
