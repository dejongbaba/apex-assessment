<script setup></script>

<template>
  <div ref="target" class="relative">
    <router-link
        class="flex items-center gap-4"
        to="#"
    >

      <span class="h-12 w-12 rounded-full">
        <img alt="User" src="@/assets/images/avatar.svg"/>
      </span>


      <span class="hidden lg:block">
        <span class="block text-sm font-bold text-black ">Tynisha Obey</span>
        <span class="block text-xs font-light text-secondary">Makostore</span>
      </span>

    </router-link>

  </div>
</template>
