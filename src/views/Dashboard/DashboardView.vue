<script lang="ts" setup>
import {ref} from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import Table from '@/components/Table/Table.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const pageTitle = ref('Tables')
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle"/>
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <Table/>
    </div>
  </DefaultLayout>
</template>
