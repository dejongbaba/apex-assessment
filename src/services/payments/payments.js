import Api from "@/services";


export const getPayments = async (params) => {
    try {
        const res = await Api.get('payments', {params})
        return res
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
