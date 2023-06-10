import moment from "moment"

export const getOrders = (params) => {
    let {
        unit,
        from,
        to,
        period,
        size,
    } = params

    if (!unit) unit = "day"
    if (!from) from = moment().subtract(1, 'months').format("YYYY-MM-DD")
    if (!to) to = moment().format("YYYY-MM-DD")
    if (!period) period = "day"
    if (!size) size = 30

    const url = `http://localhost:3000/orders?unit=${unit}&from=${from}&to=${to}&period=${period}`

    let res = []
    let prev_res = []

    for (let i = 0; i < size; i++) {
        let tmp = null
        let tmp_prev = null
        switch (period) {
            case "day":
                tmp = moment (from).add(i, 'days').format("D MMM")
                tmp_prev = moment (from).add(i, 'days').subtract(1, 'years').format("Do MMM")
                break;
            case "week":
                tmp = moment (from).add(i, 'weeks').format("wo YYYY")
                tmp_prev = moment (from).add(i, 'weeks').subtract(1, 'years').format("wo YYYY")
                break;
            case "month":
                tmp = moment (from).add(i, 'months').format("MMM YYYY")
                tmp_prev = moment (from).add(i, 'months').subtract(1, 'years').format("MMM YYYY")
                break;
            default:
                break;
        }
        res.push({
            value: Math.floor(Math.random() * 1000),
            key: tmp
        })
        prev_res.push({
            value: Math.floor(Math.random() * 1000),
            key: tmp_prev
        })
    }

    return ({
        data:
            [{
                data: res,
                name: "Orders this year"
            }, {
                data: prev_res,
                name: "last year",
                isComparison: true,
            }],
        unit: unit,
        from: from,
        to: to,
        period: period,
        size: size,
        url,
    })

}