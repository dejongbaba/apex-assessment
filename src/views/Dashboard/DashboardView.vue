<script>
import {mapActions, mapState} from "vuex";
import DefaultLayout from '../../layouts/DefaultLayout.vue';
import BreadcrumbDefault from '../../components/Breadcrumbs/BreadcrumbDefault.vue';
import Table from '../../components/Table/Table.vue';

// const pageTitle = ref('Tables')
// const filters = defineModel({amount: '', name: '', userStatus: '', paymentStatus: ''});

// console.log('filters', filters)
export default {
  components: {DefaultLayout, BreadcrumbDefault, Table},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      getPayments: 'payments/getPayments',
      getPagedPayments: 'payments/getPagedPayments',
      makePayment: 'payments/createPayment'
    }),
    getPaginatedPayments(value) {
      this.getPagedPayments(value)
    }, getPaymentResults(e) {
      console.log('eee', e.target.value)
      this.getPayments({currentPage: this.page, perPage: e.target.value})
    },
    onFilterTable() {

    },
    onPay(payment) {
      this.makePayment({payments: [payment]})
    },
    getTabPayments(tab) {
      this.getPayments({currentPage: this.page, perPage: this.perPage, type: tab})
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
    <BreadcrumbDefault :onTabPress="getTabPayments" pageTitle="Tables"/>
    <!-- Breadcrumb End -->

    <div class="flex flex-col gap-10">
      <Table :links="links" :onPayDue="onPay" :onPress="getPaginatedPayments" :onShowResult="getPaymentResults"
             :page="page"
             :payments="payments"/>
    </div>
  </DefaultLayout>
</template>
