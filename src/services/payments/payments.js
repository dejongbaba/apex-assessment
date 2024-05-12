import Api from "@/services";


export const getPayments = async (params = {page: 1, per_page: 10}) => {
    console.log('params', params)
    try {
        const res = await Api.get(`transactions${params ? '?' + new URLSearchParams(params) : ''}`)
        return res.data
    } catch (e) {
        console.log('e', e)
        return Promise.reject(e)
    }
}
export const getPaginatedPayments = async ({link, perPage,}) => {
    try {
        const res = await Api({
            url: `${link}&per_page=${perPage}`,
            baseURL: ''
        })
        return res.data
    } catch (e) {
        console.log('e', e)
        return Promise.reject(e)
    }
}
export const makePayment = async (data) => {
    try {
        const res = await Api.post('pay-dues', data)
        return res
    } catch (e) {
        console.log('e', e)
        return Promise.reject(e)
    }
}
