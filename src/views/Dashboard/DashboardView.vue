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
      getPayments: 'payments/getPayments', getPagedPayments: 'payments/getPagedPayments'
    }),
    getPaginatedPayments(value) {
      this.getPagedPayments(value)
    }, getPaymentResults(e) {
      console.log('eee', e.target.value)
      this.getPayments({currentPage: this.page, perPage: e.target.value})
    }
  },
  computed: {
    ...mapState({
      payments: (state) => state.payments.payments,
      page: (state) => state.payments.page,
      perPage: (state) => state.payments.perPage,
      type: (state) => state.payments.type,
      links: (state) => state.payments.links
    })
  },
  mounted() {
    this.getPayments({
      currentPage: 1,
      perPage: 10
    }).then((res) => console.log('res', res)).catch((e) => Promise.reject(e))
  }
}
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle"/>
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <Table :links="links" :onPress="getPaginatedPayments" :onShowResult="getPaymentResults" :page="page"
             :payments="payments"/>
    </div>
  </DefaultLayout>
</template>
