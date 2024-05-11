<script setup>
import FilterImage from '@/assets/images/filter.svg'
import InputGroup from '../InputGroup/InputGroup.vue'
import SelectGroup from '../SelectGroup/SelectGroup.vue'
import {reactive, ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const props = defineProps(['payments', 'page', 'links', 'onPress', 'onPayDue', 'onShowResult', 'filters'])


const menuAction = ref(null);
let state = reactive({show: false, id: ''});
let filterState = reactive({name: '', paymentStatus: '', userStatus: '', amount: ''});


onClickOutside(menuAction, () => {
  state.show = false
})

const onShowMenu = (payment) => {
  state.show = !state.show;
  state.id = payment.id
  console.log('in show menu', state.id, state.show)
  console.log('display', state.show === true && payment.id === state.id)
}
console.log('filter state', filterState)


//add on click button for filter , toggle filter section
// add on filter select populate filter object
</script>

<template>
  <div
      class="rounded-lg bg-white shadow-default "
  >
    <div class="py-6 px-4 md:px-6 xl:px-7.5 flex sm:justify-end">
      <button
          class="text-xl font-light bg-body border-gray-100 border-2 px-6 py-3 rounded-xl flex items-center gap-2 text-primary"
          @click="$emit('filterData',filterState)">
        <img
            :src="FilterImage"
            alt="filter icon">
        <span>Filter</span>
      </button>
    </div>

    <!--filters    -->
    <div class="grid grid-cols-8 gap-4  py-4.5 px-4 sm:grid-cols-8 md:px-6 2xl:px-7.5">
      <div class="col-span-2 flex items-center py-5">
        <InputGroup
            v-model="filterState.name"
            customClasses="w-full "
            label="Name"
            placeholder="name" type="text"
        />
      </div>
      <div class="col-span-2 flex items-center py-5">
        <InputGroup
            v-model="filterState.amount"
            customClasses="w-full "
            label="Amount"
            placeholder="amount"
            type="text"
        />
      </div>
      <div class="col-span-2 flex items-center py-5">
        <SelectGroup
            v-model="filterState.userStatus"
            :options="['all','active','inactive']"
            customClasses=""
            label="Active Users"
            placeholder="name"
        >
          <!--          <option class='hover:bg-gray-300 transition-all bg-white ' value="all">All</option>-->
          <!--          <option class='hover:bg-gray-300 transition-all bg-white ' value="active">Active</option>-->
          <!--          <option class='hover:bg-gray-300 transition-all bg-white ' value="inactive">Inactive</option>-->
        </SelectGroup>
      </div>
      <div class="col-span-2 flex items-center py-5">
        <SelectGroup
            v-model="filterState.paymentStatus"
            :options="['paid','unpaid','overdue']"
            cus="w-full "
            label="Payment Status"
            placeholder="status"
        >
          <!--          <option class='hover:bg-gray-300 transition-all bg-white ' value="all">All</option>-->
          <!--          <option class='hover:bg-gray-300 transition-all bg-white ' value="active">Active</option>-->
          <!--          <option class='hover:bg-gray-300 transition-all bg-white ' value="inactive">Inactive</option>-->
        </SelectGroup>
      </div>

    </div>
    <!-- Table Header -->
    <div
        class="grid grid-cols-6 border-t border-stroke border-gray-200 py-4.5 px-4 sm:grid-cols-11 md:px-6 2xl:px-7.5"
    >
      <div class="col-span-1 flex items-center py-5">
        <p class="font-medium">
          <input
              class='rounded-full border border-gray-300'
              type="checkbox"/>
        </p>
      </div>
      <div class="col-span-3 flex items-center py-5">
        <p class="font-medium text-secondary"> Name</p>
      </div>
      <div class="col-span-2 hidden items-center py-5 sm:flex">
        <p class="font-medium text-secondary">user Status</p>
      </div>
      <div class="col-span-2 flex items-center py-5">
        <p class="font-medium text-secondary">Payment Status</p>
      </div>
      <div class="col-span-2 flex items-center py-5">
        <p class="font-medium text-secondary">Amount</p>
      </div>
      <div class="col-span-1 flex items-center py-5">
        <p class="font-medium text-secondary"></p>
      </div>
    </div>

    <!-- Table Rows -->
    <div
        v-for="payment in payments"
        :key="payment.id"
        class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 sm:grid-cols-11 md:px-6 2xl:px-7.5"
    >
      <div class="col-span-1 flex items-center py-4">
        <p class="text-sm font-medium text-black dark:text-white">
          <input id=""
                 class='rounded-full border border-gray-300'
                 name=""
                 type="checkbox"/>
        </p>
      </div>

      <div class="col-span-3 flex items-center py-4">
        <div class="space-y-1">
          <p class="text-base font-bold text-black ">{{ payment.user.name }}</p>
          <p class="text-sm font-medium text-secondary ">{{ payment.user.email }}</p>
        </div>
      </div>
      <div class="col-span-2 py-4 sm:block  ">
        <div class="space-y-1">
          <p :class="payment.user.status =='active'?'bg-green-100 text-green-500':'bg-yellow-100 text-yellow-500'"
             class="text-sm font-medium capitalize  inline-block rounded-lg  px-4 py-2">
            &#x2022 {{ payment.user.status }}
          </p>
          <p class="text-sm font-normal  ">
            Last Login: {{ payment.user.last_login_at }}
          </p>
        </div>
      </div>
      <div class="col-span-2  py-4">
        <div class="space-y-1">
          <p :class="payment.payment_made_at !== null ? 'bg-green-100 text-green-500' : payment.payment_made_at == null && new Date(payment.payment_expected_at) > new Date() ? 'bg-yellow-100 text-yellow-500' : new Date(payment.payment_expected_at) < new Date() ? 'bg-red-100 text-red-500' : ''"
             class="text-sm capitalize font-medium  inline-block rounded-lg  px-4 py-2">
            &#x2022 {{
              payment.payment_made_at !== null ? "paid" : payment.payment_made_at === null && new Date(payment.payment_expected_at) > new Date() ? 'unpaid' : new Date(payment.payment_expected_at) < new Date() ? 'overdue' : ''
            }}</p>
          <p class="text-sm font-normal text-black ">{{
              payment.payment_made_at ? 'Paid on: ' + payment.payment_made_at : payment.payment_made_at === null && new Date(payment.payment_expected_at) > new Date() ? 'Due on :' + payment.payment_expected_at : 'Dued on :' + payment.payment_expected_at
            }}</p>
        </div>
      </div>
      <div class="col-span-2  py-4">
        <div class="space-y-1">
          <p class=" font-semibold text-lg ">${{ payment.amount }}</p>
          <p class="text-sm font-medium text-secondary ">{{ payment.currency }}</p>
        </div>
      </div>
      <div class="col-span-1 space-y-1 py-4">
        <div class='relative'>
          <img ref="menuAction" alt="dots menu" class="cursor-pointer" src="@/assets/images/dots-vertical.svg"
               @click="onShowMenu(payment)">
          <div v-if="state.show === true && payment.payment_made_at === null && payment.id === state.id"
               class='absolute cursor-pointer bg-white px-6 py-4 shadow-lg'
               @click="onPayDue(payment);state.show=false">
            Pay due
          </div>
        </div>
      </div>

    </div>
    <!--pagination-->
    <div class='flex flex-col border-t sm:flex-row justify-between px-5'>
      <div class='flex gap-2 items-center px-5 py-6'>
        <span class='text-secondary text-base'>Show result:</span>
        <select class="border border-2 rounded-lg border-gray-200 " @change="onShowResult">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
      </div>
      <div class="flex gap-2 items-center">
        <!--        <div class="">-->
        <!--        </div>-->
        <!--        <div-->
        <!--            class='text-secondary text-base rounded-lg bg-green-200 text-green-500 w-8 h-8 flex items-center justify-center '>-->
        <!--          1-->
        <!--        </div>-->

        <button v-for="link in links"
                :key="link.label" :class="page == link.label ?'bg-green-200 text-green-500':''"
                class='text-secondary text-base rounded-lg  w-8 h-8 flex items-center justify-center '
                @click="onPress(link.url)">
          <img v-if="link.label.includes('Previous')" alt="previous arrow" src="@/assets/images/chevron-left.svg">
          <img v-else-if="link.label.includes('Next')" alt="previous arrow" src="@/assets/images/chevron-right.svg">
          <span v-else>{{ link.label }}</span>
        </button>
        <!--        <div class='text-secondary text-base rounded-lg  w-8 h-8 flex items-center justify-center '>3</div>-->
        <!--        <div class='text-secondary text-base rounded-lg  w-8 h-8 flex items-center justify-center '>4</div>-->
        <!--        <div class="">-->
        <!--          <img alt="next arrow" src="@/assets/images/chevron-right.svg">-->
        <!--        </div>-->
      </div>

    </div>
  </div>
</template>
