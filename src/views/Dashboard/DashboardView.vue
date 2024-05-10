<script>
import {ref} from 'vue'
import {mapActions, mapState} from "vuex";
import DefaultLayout from '../../layouts/DefaultLayout.vue';
import BreadcrumbDefault from '../../components/Breadcrumbs/BreadcrumbDefault.vue';
import Table from '../../components/Table/Table.vue';

const pageTitle = ref('Tables')

export default {
  components: {DefaultLayout, BreadcrumbDefault, Table},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      getPayments: 'payments/getPayments'
    }),
  },
  computed: {
    ...mapState({
      payments: (state) => state.payments.payments,
      page: (state) => state.payments.page,
      perPage: (state) => state.payments.perPage,
      type: (state) => state.payments.type
    })
  },
  mounted() {
    this.getPayments().then((res) => console.log('res', res)).catch((e) => Promise.reject(e))
  }
}
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle"/>
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <Table :payments="payments"/>
    </div>
  </DefaultLayout>
</template>
