<script setup>
import UserInfo from './UserInfo.vue'</script>

<template>
  <header
      class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1"
  >
    <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-8 2xl:px-11">
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <router-link class="block flex-shrink-0 lg:hidden" to="/">
          <h1 class='font-bold '>Payments</h1>
        </router-link>
      </div>
      <div class="hidden sm:block">
        <h1 class='text-2xl font-bold'>Table Heading</h1>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <!-- User Area -->
        <UserInfo/>
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>
