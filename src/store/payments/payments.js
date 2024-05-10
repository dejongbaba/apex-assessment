import {getPaginatedPayments, getPayments, makePayment} from "@/services/payments/payments";

export default {
    namespaced: true,
    state: {
        payments: [],
        payment: {},
        page: 1,
        perPage: 20,
        type: 'unpaid'
    },
    mutations: {
        setPayments(state, payments) {
            state.payments = payments.data
            state.page = payments.current_page
            state.perPage = payments.per_page
            state.type = payments.state
            state.first_page_url = payments.first_page_url
            state.first_page_url = payments.first_page_url
            state.next_page_url = payments.next_page_url
            state.links = payments.links
        },
        setPayment(state, payment) {
            state.payment = payment
        },
        setPagedPayments(state, payments) {
            state.payments = payments.data
            state.page = payments.current_page
            state.perPage = payments.per_page
            state.type = payments.state
            state.first_page_url = payments.first_page_url
            state.first_page_url = payments.first_page_url
            state.next_page_url = payments.next_page_url
            state.links = payments.links
        }
    },
    actions: {
        async getPayments({commit}, payload) {
            const {currentPage = 1, perPage = 10, type = ''} = payload;
            console.log('payload', currentPage, perPage, type)
            try {
                const payments = await getPayments({page: currentPage, per_page: perPage, state: type})
                commit('setPayments', payments)
                console.log('payments', payments)
            } catch (e) {
            }
        },
        async getPagedPayments({commit}, link) {
            try {
                const payments = await getPaginatedPayments(link)
                commit('setPagedPayments', payments)
                console.log('payments paged', payments)
            } catch (e) {
            }
        },
        async createPayment({commit}, data) {
            try {
                const payment = await makePayment(data)
                commit('setPayment', payment)
            } catch (e) {
            }
        }
    }
}
